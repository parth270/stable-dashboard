import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  return (
    <div className="w-[100%] h-[300px]  flex items-center justify-center top-0 left-0">
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#ccc"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill={"#e85b40"}
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

const AnswerHolder = ({ answer, close }) => {
  return (
    <>
      {answer.show && (
        <div
          className="w-[100%] h-[100%] fixed flex items-center justify-center"
          style={{
            zIndex: 999999999999999,
          }}
        >
          <div className="w-[700px] min-h-[50px] max-h-[400px] px-[30px] py-[50px] bg-[#ffffff60] backdrop-blur-[10px] rounded-[20px] relative">
            {answer.loading ? (
              <Loader />
            ) : (
              <p className="text-[16px] font-bold fckin text-[#fff] tracking-wide">
                {answer.text}
              </p>
            )}
            <div
              onClick={() => {
                close();
              }}
              className="w-[40px] h-[40px] absolute top-[10px] cursor-pointer flex items-center justify-center right-[20px]"
            >
              <img src="/Cross.svg" alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
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
        text: result.answer,
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
      <AnswerHolder
        answer={answer}
        close={() => {
          setAnswer({
            show: false,
            loading: false,
            text: "",
          });
        }}
      />
    </>
  );
};

const Answer = () => {
  const filesId = useSelector((state) => state.ai.filesId);

  return <>{filesId && <Input id={filesId} />}</>;
};

export default Answer;
