import React from "react";
import { useEffect } from "react";

const Answer = ({ files }) => {
  useEffect(() => {
    if (files.length !== 0) {
      console.log(files, "plaese check");
    }
  }, [files]);
  return <></>;
};

export default Answer;
