import React, { useRef } from "react";
import Close from "../close";
import App from "./Main";


const AiQuerryContainer = () => {
  const ref = useRef();


  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-hidden flex flex-col items-center">
        <Close />
        <App/>
      </div>
    </>
  );
};

export default AiQuerryContainer;
