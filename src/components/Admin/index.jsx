import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DropDown from "./dropdown";
import { useDropzone } from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { setAdminUrl, setVideo } from "../../services/Model";

const Admin = () => {
  const [input, setInput] = useState("");
  const router = useNavigate();
  const [curr, setCurr] = useState(0);

  const [files, setFiles] = useState(null);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: curr === 0 ? "image/*" : "video/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    },
  });

  const removeFile = (file) => () => {
    setFiles(null);
  };

  const thumbs = files ? (
    <div className="w-[100%] h-[100%] relative">
      {curr === 0 ? (
        <img
          src={files.preview}
          alt={files.name}
          className="w-[100%] h-[100%] object-contain"
        />
      ) : (
        <video
          src={files.preview}
          alt={files.name}
          className="w-[100%] h-[100%] object-contain"
          autoPlay
        ></video>
      )}
      <button
        onClick={removeFile(files)}
        className="absolute top-[0px] right-[0px] w-[30px] h-[30px] text-[#fff] bg-[#444] flex items-center justify-center p-[1px] fckin text-[13px] font-bold tracking-wide rounded-sm"
      >
        <img src="/Cross.svg" alt="" />
      </button>
    </div>
  ) : (
    <></>
  );
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      if (files) {
        URL.revokeObjectURL(files.preview);
      }
    },
    [files]
  );

  console.log(files?.preview);

  function convertBlobToBase64(blobFile) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blobFile);
    });
  }
  function convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  }
  function convertFileVideoToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  }

  const state = useSelector((state) => state.model);
  const [fcheck, setFCheck] = useState(false);
  useEffect(() => {
    if (fcheck) {
      router("/");
    } else {
      setFCheck(true);
    }
  }, [state.adminUrl]);

  const dispatch = useDispatch();

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-between px-[10%]">
      <div className="flex justify-end absolute top-[20px] right-[20px]">
        <DropDown
          curr={curr}
          change={(e) => {
            setCurr(e);
            setFiles(null);
          }}
        />
      </div>
      <div className="w-[500px]">
        <p className="text-[20px] font-bold fckin">
          Please drop or{" "}
          <span
            className="hover:underline cursor-pointer text-[#ff0000]"
            onClick={open}
          >
            browse
          </span>{" "}
          an {curr === 0 ? "Image" : "Video"}!
          {/* Please add an Image Link to be embedded to the Intro page? */}
        </p>
        {/* <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="w-[100%] h-[50px] border-[#000] border-[3px] mt-[15px] px-[15px] text-[20px] font-bold fckin"
        /> */}
        <section className="container">
          <div
            {...getRootProps({
              className: "dropzone h-[200px] flex justify-center",
            })}
            onClick={(e) => e.stopPropagation}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
        <button
          onClick={() => {
            if (files) {
              console.log(files);
              if (curr === 1) {
                convertFileVideoToBase64(files).then((e) => {
                  console.log(e);
                  dispatch(setAdminUrl(e));
                  dispatch(setVideo(true));
                  // localStorage.setItem("admin", e);
                  // if (curr === 1) {
                  //   localStorage.setItem("video", true);
                  // } else {
                  //   localStorage.setItem("video", false);
                  // }
                  // router("/");
                });
              } else {
                convertFileToBase64(files).then((e) => {
                  console.log(e);
                  dispatch(setAdminUrl(e));
                  dispatch(setVideo(false));
                  // localStorage.setItem("admin", e);
                  // if (curr === 1) {
                  //   localStorage.setItem("video", true);
                  // } else {
                  //   localStorage.setItem("video", false);
                  // }
                  // router("/");
                });
              }
              // convertBlobToBase64(files.preview).then((e) => {
              //   console.log(e);
              // });
            }

            // if (files) {
            //   localStorage.setItem("admin", files.preview);
            //   if (curr === 1) {
            //     localStorage.setItem("video", true);
            //   } else {
            //     localStorage.setItem("video", false);
            //   }
            //   router("/");
            // }
          }}
          className=" text-[20px] font-bold fckin text-[#fff] h-[55px] w-[100%] bg-[#000] mt-[14px]"
        >
          Submit
        </button>
      </div>
      <div className="w-[1px] h-[100%] boder-[#000] border-dashed border-[1px] "></div>
      <div className="w-[500px] h-[500px] flex flex-col justify-center">
        <p className="text-[20px] font-bold fckin mb-[12px]">
          {curr === 0 ? "Image" : "Video"} Preview
        </p>
        <div className="w-[500px] h-[350px] ">{files && thumbs}</div>
      </div>
    </div>
  );
};

export default Admin;
