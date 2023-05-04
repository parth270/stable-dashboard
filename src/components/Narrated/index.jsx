import React, { useState } from "react";
import Close from "../close";
import Model from "./model";
import Aud from "./Aud";
import data from "./auds";

const NarratedContainer = () => {
  const [curr, setCurr] = useState(0);
  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-hidden flex-col items-center">
        <Aud
          change={(e) => {
            setCurr(e);
          }}
        />
        <Close />
        <Model title={data[curr].title} content={data[curr].content} />
      </div>
    </>
  );
};

export default NarratedContainer;
