import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFiles } from "../../services/ai";

const FlipBook = ({ files }) => {
  const [loading, setLoading] = useState(false);
  const filesId = useSelector((state) => state.ai.filesId);

  return (
    <div className="w-[100%] h-[100vh] px-[100px] py-[70px]">
      {files.length !== 0 && filesId ? (
        <div className="w-[100%] h-[100%] "></div>
      ) : (
        <div className="w-[100%] h-[100%]  backdrop-blur-[5px] bg-[#ffffff60] border-[#fff] rounded-[5px] flex items-center justify-center ">
          <p className="text-[30px] font-bold fckin text-[#fff] capitalize tracking-sm">
            Upload a PDF file Please
          </p>
        </div>
      )}
    </div>
  );
};

export default FlipBook;
