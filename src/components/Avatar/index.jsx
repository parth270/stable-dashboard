import React, { useState } from "react";
import Close from "../close";
import Model from "./model";
import Avatars from "./Avatar";

const AvatarContainer = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-hidden flex-col items-center">
        <Close />
        <Model />
        <Avatars/>
      </div>
    </>
  );
};

export default AvatarContainer;
