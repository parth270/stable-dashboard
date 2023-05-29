import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HTMLFlipBook from "react-pageflip";
import { Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import { Document } from "react-pdf";
import { Page } from "react-pdf";
import { pdfjs } from "react-pdf";

const Book = ({ sizes, file }) => {
  const [numPages, setNumPages] = useState(0);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7]);
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });
  console.log(arr, numPages);

  return (
    <>
      <HTMLFlipBook
        width={sizes.x / 2}
        height={sizes.y}
        className="flex"
        showCover={true}
      >
        {arr.map((item, i) => {
          return (
            <div key={i}>
              <div
                style={{
                  width: `${sizes.x / 2}px`,
                  height: `${sizes.y}px`,
                  display: "flex !important",
                  overflow: "hidden",
                }}
                className="bg-[#fff] flex items-center justify-center overflow-hidden"
              >
                {/* <span className="fckin text-[20px] font-bold">
                  Page-{i + 1}
                </span> */}
                {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer
                      fileUrl={URL.createObjectURL(file)}
                      // defaultScale={SpecialZoomLevel.PageFit}
                      defaultScale={SpecialZoomLevel.PageFit}
                      currentPage={i+1}
                    />
                </Worker> */}
                <Document
                  width={sizes.x / 2}
                  height={sizes.y}
                  file={file}
                  onLoadSuccess={(e) => {
                    console.log(e._pdfInfo.numPages);
                    const newArr = Array(e._pdfInfo.numPages).fill(0);
                    setNumPages(e._pdfInfo.numPages);
                    console.log(newArr);
                    setArr(newArr);
                  }}
                >
                  <Page
                    pageNumber={i + 1}
                    width={sizes.x / 2}
                    height={sizes.y}
                  />
                </Document>
              </div>
            </div>
          );
        })}
      </HTMLFlipBook>
    </>
  );
};

const FlipBook = ({ files }) => {
  const [loading, setLoading] = useState(false);
  const filesId = useSelector((state) => state.ai.filesId);
  console.log(files[0], "pease");
  const ref = useRef();
  const [sizes, setSizes] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (sizes.x === 0) {
      const check = ref.current.getBoundingClientRect();
      console.log(check);
      setSizes({
        x: check.width,
        y: check.height,
      });
    }
  });

  return (
    <div className="w-[100%] h-[100vh] px-[350px] py-[100px]">
      {files.length !== 0 && filesId ? (
        <div
          className="w-[100%] h-[100%] flex items-center justify-end"
          ref={ref}
        >
          <Book sizes={sizes} file={files[0]} />
        </div>
      ) : (
        <div
          ref={ref}
          className="w-[100%] h-[100%]  backdrop-blur-[5px] bg-[#ffffff60] border-[#fff] rounded-[5px] flex items-center justify-center "
        >
          <p className="text-[30px] font-bold fckin text-[#fff] capitalize tracking-sm">
            Upload a PDF file Please
          </p>
        </div>
      )}
    </div>
  );
};

export default FlipBook;