import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [input, setInput] = useState("");
  const router = useNavigate();

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <div className="w-[500px]">
        <p className="text-[20px] font-bold fckin">
          Please add an Website Link to be embedded to the Intro page?
        </p>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          className="w-[100%] h-[50px] border-[#000] border-[3px] mt-[15px] px-[15px] text-[20px] font-bold fckin"
        />
        <button
          onClick={() => {
            if (input) {
              localStorage.setItem("admin", input);
              router("/");
            }
          }}
          className=" text-[20px] font-bold fckin text-[#fff] h-[55px] w-[100%] bg-[#000] mt-[14px]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Admin;
