import React, { useRef } from "react";
import Close from "../close";
import App from "./Main";


const AiQuerryContainer = () => {
  const ref = useRef();


  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-hidden flex flex-col items-center">
        <Close />
        {/* <h1 className="text-center text-[#fff] text-[28px] mt-[50px]  font-semibold">
          Ai Query
        </h1>
        <iframe
          ref={ref}
          // src="https://pdfgpt.io/"
          src="https://nicroux-pdfgpt-frontend.vercel.app/"
          className="w-[100%] h-[100vh] absolute top-0 left-0"
          frameborder="0"
        ></iframe> */}
        <App/>
      </div>
    </>
  );
};

export default AiQuerryContainer;
