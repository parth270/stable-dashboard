import React, { useRef } from "react";
import Close from "../close";

const AiQuerryContainer = () => {
  const ref = useRef();

  React.useEffect(() => {
    const doc = document.getElementsByClassName("Home_main__nLjiQ");
    console.log(doc);
  });
  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-hidden flex flex-col items-center">
        <Close />
        <h1 className="text-center text-[#fff] text-[28px] mt-[50px]  font-semibold">
          Ai Query
        </h1>
        <iframe
          ref={ref}
          src="https://pdfgpt.io/"
          className="w-[100%] h-[100vh] absolute top-0 left-0"
          frameborder="0"
        ></iframe>
        <div
          className="w-[100%] h-[50px] bg-[#19376d]  absolute bottom-0"
          style={{
            zIndex: 1000000000000,
          }}
        ></div>
      </div>
    </>
  );
};

export default AiQuerryContainer;
