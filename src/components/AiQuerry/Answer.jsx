import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const AnswerHolder = ({ answer }) => {
  return <></>;
};

const Input = ({ id }) => {
  const [answer, setAnswer] = useState({
    show: false,
    loading: false,
    text: "",
  });
  const [input, setInput] = useState("");
  const chat_qa = async () => {
    setAnswer({
      show: true,
      loading: true,
      text: "",
    });
    const formData = new FormData();
    formData.append("query", input);
    formData.append("user_id", "Molotov");
    formData.append("file_id", id);

    // define the request options
    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    // send the request to the API and set the response for the current message
    try {
      const response = await fetch(
        "https://b656-3-133-102-91.ngrok-free.app/chatqa_multiple",
        requestOptions
      );
      const result = await response.json();
      console.log(result);
      setAnswer({
        show: true,
        loading: false,
        text: "Text is showing",
      });
      // Create an array of all the answers

      // Push a new message object to history containing the question and all corresponding answers
    } catch (error) {
      console.log("error", error);
      setAnswer({
        show: false,
        loading: false,
        text: "",
      });
    }
  };

  return (
    <>
      <div className="w-[400px] flex items-center h-[50px] absolute top-[20px] right-[20px] bg-[#fff] rounded-[2px] px-[10px] py-[4px]">
        <input
          type="text"
          className="w-[100%] h-[100%] outline-none fckin text-[14px] font-medium"
          placeholder="Ask Questions!"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              if (input !== "") {
                chat_qa();
              }
            }
          }}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div
          onClick={() => {
            if (input !== "") {
              chat_qa();
            }
          }}
          className="w-[40px] h-[100%] flex items-center justify-center cursor-pointer"
        >
          <img src="/play.png" className="w-[15px]" alt="" />
        </div>
      </div>
      <AnswerHolder answer={answer} />
    </>
  );
};

const Answer = () => {
  const filesId = useSelector((state) => state.ai.filesId);

  return <>{filesId && <Input id={filesId} />}</>;
};

export default Answer;
