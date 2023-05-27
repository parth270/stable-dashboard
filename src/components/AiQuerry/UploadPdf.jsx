import { Power4 } from "gsap";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Tween } from "react-gsap";
import Answer from "./Answer";

const DropZone = ({ change, trans, files, setFiles }) => {
  const [dropzoneActive, setDropzoneActive] = useState(false);
  const [loading, setLoading] = useState(false);

  const [text, setText] = useState("Drop PDF here!");

  const handleDrop = (e) => {
    if (e[0]) {
      setFiles(e);
      change();
    } else {
      setDropzoneActive(false);
      setText("Recieved input other than PDF");
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
                {!dropzoneActive ? (
                  <p className="fckin text-[#fff] font-bold text-[24px]">
                    {text}
                  </p>
                ) : (
                  <p className="fckin text-[#fff] font-bold text-[24px]">
                    Uploading...
                  </p>
                )}
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
      <Answer files={files} />
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
