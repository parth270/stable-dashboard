import React, { useState } from "react";
import Close from "../close";
import Model from "./model";
import Aud from "./Aud";

const NarratedContainer = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-hidden flex-col items-center">
        <Aud />
        <Close />
        <Model />
      </div>
    </>
  );
};

export default NarratedContainer;
