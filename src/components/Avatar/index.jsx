import React, { useState } from "react";
import Close from "../close";
import Model from "./model";
import Avatars from "./Avatar";
import data from "./auds";

const AvatarContainer = () => {
  const [curr, setCurr] = useState(0);
  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-hidden flex-col items-center">
        <Close />
        <Model title={data[curr].title} content={data[curr].content} />
        <Avatars
          change={(e) => {
            setCurr(e);
          }}
        />
      </div>
    </>
  );
};

export default AvatarContainer;
