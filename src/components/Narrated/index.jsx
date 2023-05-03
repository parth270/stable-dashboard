import React, { useState } from "react";
import Close from "../close";

const NarratedContainer = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-hidden flex-col items-center">
        <Close />
        <h1 className="text-center text-[#fff] text-[28px] mt-[50px]  font-semibold">
          Narrated
        </h1>
      </div>
    </>
  );
};

export default NarratedContainer;
