import { Power4 } from "gsap";
import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { Tween } from "react-gsap";
import Answer from "./Answer";
import FlipBook from "./Book";
import { useDispatch } from "react-redux";
import { settingFiles } from "../../services/ai";

const DropZone = ({ change, trans, files, setFiles }) => {
  const [dropzoneActive, setDropzoneActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const [text, setText] = useState("Drop PDF here!");

  const handleDrop = (e) => {
    if (e[0]) {
      analyze_documents("Molotov", e);
      setFiles(e);
    } else {
      setDropzoneActive(false);
      setText("Recieved input other than PDF");
    }
  };

  const dispatch = useDispatch();

  const analyze_documents = async (user_id, files) => {
    // create a new FormData instance

    const formData = new FormData();

    // append the file to the FormData instance

    if (files) {
      formData.append("file", files[0], files[0].name);
      formData.append("user_id", user_id);
      setText("Uploading...");
    } else {
      alert("Please select a file");
      return;
    }

    // formData.append("file", file, file.name);

    // define the request options
    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "https://pdfgptmolotov.ngrok.app/analyze_multiple_documents",
        requestOptions
      );
      const result = await response.json();
      //   setFileid(result.file_id);
      console.log(result.file_id);
      setText("Uploaded");
      change();
      dispatch(settingFiles(result.file_id));
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <Tween
        from={{
          opacity: 0,
        }}
        to={{
          opacity: trans ? 1 : 0,
        }}
        duration={0.5}
        ease={Power4.easeInOut}
      >
        <div
          className="w-[100%] h-[100%] absolute bg-[#00000060] backdrop-blur-[5px] flex items-center justify-center"
          style={{
            zIndex: 999999999999,
          }}
        >
          <div
            onClick={() => {
              change();
            }}
            className="w-[40px] h-[40px] absolute top-[20px] cursor-pointer flex items-center justify-center right-[20px]"
          >
            <img src="/Cross.svg" alt="" />
          </div>
          <Dropzone
            onDrop={handleDrop}
            onDragEnter={() => setDropzoneActive(true)}
            onDragLeave={() => setDropzoneActive(false)}
            accept={{
              "application/pdf": [],
            }}
          >
            {({
              getRootProps,
              getInputProps,
              isDragActive,
              isDragAccept,
              isDragReject,
            }) => (
              <div
                {...getRootProps()}
                className="cursor-pointer w-[600px] h-[380px] rounded-[5px] flex items-center justify-center duration-100 bg-[#ffffff60] backdrop-blur-[10px] fckin"
                style={{
                  border: dropzoneActive
                    ? "2px dashed #fff"
                    : "2px dashed #ccc",
                }}
              >
                {/* move input element outside of the text container */}
                <input {...getInputProps()} />
                <p className="fckin text-[#fff] font-bold text-[24px]">
                  {text}
                </p>
              </div>
            )}
          </Dropzone>
        </div>
      </Tween>
    </>
  );
};

const UploadPdf = () => {
  const [clicked, setClicked] = useState(false);
  const [trans, setTrans] = useState(false);
  const [files, setFiles] = useState([]);

  return (
    <>
      {clicked && (
        <DropZone
          trans={trans}
          files={files}
          setFiles={setFiles}
          change={() => {
            setTrans(false);
            setTimeout(() => {
              setClicked(false);
            }, 500);
          }}
        />
      )}
      <Answer />
      <FlipBook files={files} />

      <div
        onClick={() => {
          setClicked(true);
          setTrans(true);
        }}
        className="w-[40px] h-[40px] absolute bottom-[20px] flex items-center cursor-pointer justify-center left-[20px] rounded-[12px] bg-[#fff]"
      >
        <img src="/upload.svg" className="w-[25px] h-[25px]" alt="" />
      </div>
    </>
  );
};

export default UploadPdf;
