import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

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

const Input = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  function isYoutubeLink(link) {
    var youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/)?([a-zA-Z0-9\-_]+)/;
    var match = link.match(youtubeRegex);
    return !!match;
  }

  const submit = () => {
    if (isYoutubeLink(input) && !loading) {
      setLoading(true);
      const req = new FormData();
      req.append("user_id", "Parth");
      req.append("youtube_link", input);
      req.append("number_of_questions", 10);

      const url = "https://pdfgptmolotov.ngrok.app/generate_youtube_quiz";
      axios.post(url, req).then((e) => {
        setLoading(false);
        console.log(e);
      });
    }
  };

  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <div className="px-[10%] items-center pb-[30px] flex-col w-[1000px] min-h-[200px] rounded-[5px] bg-[#ffffff40] py-[20px] backdrop-blur-xl">
        <h1 className="text-[40px] fckin font-medium text-center text-[#fff] tracking-wide">
          Mesmr Learning: YouTube Style
        </h1>
        <div className="w-[100%] mt-[20px] px-[20px] flex items-center h-[50px] bg-[#fff] rounded-[5px]">
          <input
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                // Your code to handle the Enter key press event
                submit();
                // Trigger your desired event or function here
              }
            }}
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Youtube Link"
            className="w-[100%] px-[10px] font-medium tracking-wide fckin h-[100%] outline-none"
          />
          <img src="/play.png" className=" w-[15px] cursor-pointer" alt="" />
        </div>
        <div
          onClick={() => {
            submit();
          }}
          className="w-[100%] justify-center text-[17px] cursor-pointer font-medium  text-[#fff] tracking-wide mt-[20px] px-[20px] flex items-center h-[50px] grady-1 rounded-[5px]"
        >
          {!loading ? (
            <span className="translate-y-[1px]"> Search</span>
          ) : (
            <svg
              aria-hidden="true"
              className="w-5 mr-2 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="w-[100%] h-[100vh]">
      <Input />
    </div>
  );
};

export default App;
