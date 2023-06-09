import axios from "axios";
import { Power4 } from "gsap";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Tween } from "react-gsap";
import YouTube from "react-youtube";

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

const Input = ({ submitted, shorts }) => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [err, setErr] = useState("");
  const [end, setEnd] = useState(false);
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
      try {
        shorts(input);

        axios.post(url, req).then((e) => {
          if (e.data.message) {
            setErr(e.data.message);
            setLoading(false);
          } else {
            setLoading(false);
            setEnd(true);
            setTimeout(() => {
              submitted(e.data);
            }, 1800);
          }
          console.log(e);
        });
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
  };

  return (
    <Tween
      from={{
        clipPath: "inset(0px 0vw 0vh 0px)",
      }}
      to={{
        clipPath: end ? "inset(0px 50vw 0vh 50vw)" : "inset(0px 0vw 0vh 0vw)",
        // clipPath: !showed ? "inset(0px 100% 0px 1px)" : "inset(0px 0px 0% 1px)",
      }}
      duration={1.7}
      ease={Power4.easeInOut}
    >
      <div className="w-[100%] h-[100vh] flex items-center justify-center">
        <div className="px-[10%] items-center pb-[30px] flex-col w-[1000px] min-h-[200px] rounded-[5px] bg-[#ffffff40] py-[20px] backdrop-blur-xl">
          <h1 className="text-[40px] good-font font-medium text-center text-[#fff] tracking-wide">
            Mesmr Learning
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
              className="w-[100%] px-[10px] font-medium tracking-wide good-font h-[100%] outline-none"
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
    </Tween>
  );
};

const Option = ({ title, stat, ans, i }) => {
  return (
    <div className="flex items-center mb-[5px] ">
      {stat === null && (
        <div
          onClick={() => {
            ans(i);
          }}
          className="w-[17px] cursor-pointer shrink-0 h-[17px] rounded-sm"
          style={{
            border: "2px solid #fff",
          }}
        ></div>
      )}
      {stat === true && (
        <div className="w-[17px] cursor-pointer shrink-0 bg-[#00ff00]  h-[17px] rounded-sm">
          <img src="/assets/check.svg" className="w-[]" alt="" />
        </div>
      )}
      {stat === false && (
        <div className="w-[17px] cursor-pointer shrink-0 bg-[#ff0000]  h-[17px] rounded-sm">
          <img src="/assets/cross.svg" className="w-[]" alt="" />
        </div>
      )}
      <p className="text-[15px] font-medium good-font text-[#fff] ml-[10px] translate-y-[1px] tracking-wide">
        {title}
      </p>
    </div>
  );
};

const Mcqs = ({ data, curr, next, prev }) => {
  const [answer, setAnswer] = useState(null);
  const [correct, setCorrect] = useState(null);
  const ans = (event) => {
    if (answer === null) {
      const url = "https://pdfgptmolotov.ngrok.app/answer_youtube_quiz";

      const req = new FormData();
      req.append("user_id", "Parth");
      req.append("youtube_link", data.youtube_link);
      req.append("question_number", curr + 1);

      axios.post(url, req).then((e) => {
        setAnswer(e.data.correct_option);
        console.log(e, e.data.correct_option);

        if (Number(e.data.correct_option) === event) {
          setCorrect(true);
        } else {
          setCorrect(false);
        }
      });
    }
  };

  return (
    <div
      className=" bg-[#00000060] mt-[40px] px-[50px] rounded-[3px]
   pt-[30px] h-[425px] flex-col flex justify-center pb-[30px] backdrop-blur-xl w-[48%]"
    >
      <p className="text-[25px] text-[#fff] mb-[10px] tracking-wide good-font font-medium ">
        Multiple Questions ({curr + 1}/10) :
      </p>
      <div className="h-[190px] overflow-y-auto scroll-bar-cool">
        <p className="text-[15px] text-[#fff] mb-[10px] tracking-wide good-font font-medium ">
          Q.{curr + 1} {data.questions[curr].question}
        </p>
        <Option
          title={data.questions[curr].options[0]}
          stat={answer === null ? null : answer === 0}
          ans={ans}
          i={0}
        />
        <Option
          title={data.questions[curr].options[1]}
          stat={answer === null ? null : answer === 1}
          ans={ans}
          i={1}
        />
        <Option
          title={data.questions[curr].options[2]}
          stat={answer === null ? null : answer === 2}
          ans={ans}
          i={2}
        />
        <Option
          title={data.questions[curr].options[3]}
          stat={answer === null ? null : answer === 3}
          ans={ans}
          i={3}
        />
      </div>
      <p className="text-[15px] h-[20px] text-[#fff] mb-[10px] tracking-wide good-font font-medium ">
        {correct === null
          ? ""
          : correct
          ? "Correct Answer!"
          : `Wrong Answer! Correct Answer is ${
              answer === 0 ? "A" : answer === 1 ? "B" : answer === 2 ? "C" : "D"
            }`}
      </p>
      <div className="w-[100%] h-[50px] flex items-center justify-end">
        <div
          onClick={() => {
            if (curr !== 0) {
              prev();
            }
          }}
          style={{
            backgroundColor: curr === 0 ? "#555" : "#222",
          }}
          className="w-[120px] flex items-center justify-center font-medium good-font tracking-wide rounded-sm cursor-pointer h-[100%]  text-[#fff]"
        >
          Prev
        </div>
        <div
          onClick={() => {
            if (curr !== 9) {
              next();
            }
          }}
          style={{
            backgroundColor: curr === 9 ? "#555" : "#222",
          }}
          className="w-[120px] ml-[10px] flex items-center justify-center font-medium good-font tracking-wide rounded-sm cursor-pointer h-[100%]  text-[#fff]"
        >
          Next
        </div>
      </div>
    </div>
  );
};

const FlipCard = ({ front, back }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      className="flip-card cursor-pointer"
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      <div className={`flip-card-inner ${clicked ? "rota" : ""}`}>
        <div className="flip-card-front">{front}</div>
        <div className="flip-card-back">{back}</div>
      </div>
    </div>
  );
};

const ShortAnswers = ({shorts}) => {
  const [Shorts, setShorts] = useState([
    {
      question: "Q.1 Why is it not connected to the Backend?",
      answer: "Vatsal is making some changes, after that it will be integrated",
    },
    {
      question: "Q.2 What is your name?",
      answer: "My name is Parth",
    },
    {
      question: "Q.3 What is your name?",
      answer: "My name is Parth",
    },
    {
      question: "Q.4 What is your name?",
      answer: "My name is Parth",
    },
    {
      question: "Q.5 What is your name?",
      answer: "My name is Parth",
    },
  ]);
  const [curr, setCurr] = useState(0);
  return (
    <div
      className=" bg-[#00000060] mt-[40px] h-[425px] px-[50px] rounded-[3px]
                pt-[30px] pb-[30px] backdrop-blur-xl w-[48%] flex-col flex"
    >
      <p className="text-[25px] text-[#fff] mb-[10px] tracking-wide good-font font-medium ">
        Short Answer Questions ({curr+1}/5) :
      </p>
      {shorts.map((item, i) => {
        if (curr !== i) {
          return <React.Fragment key={i} />;
        }
        return (
          <FlipCard
            front={
              <div className="w-[100%] px-[20px] overflow-hidden bg-[#7857fe] h-[100%] flex items-center justify-center text-[15px] good-font text-[#fff] font-medium">
                {" "}
                {item.question}
              </div>
            }
            back={
              <div className="w-[100%]  px-[20px] overflow-hidden bg-[#f25737] h-[100%] flex items-center justify-center text-[15px] good-font text-[#fff] font-medium">
                {" "}
                {item.answer}
              </div>
            }
            key={i}
          />
        );
      })}
      <div className="w-[100%] shrink-0 h-[50px] flex items-center justify-end">
        <div
          onClick={() => {
            if (curr !== 0) {
              setCurr(curr - 1);
            }
          }}
          className="w-[120px] flex items-center justify-center font-medium good-font tracking-wide rounded-sm cursor-pointer h-[100%]  text-[#fff]"
          style={{
            backgroundColor: curr === 0 ? "#555" : "#222",
          }}
        >
          Prev
        </div>
        <div
          onClick={() => {
            if (curr !== 4) {
              setCurr(curr + 1);
            }
          }}
          style={{
            backgroundColor: curr === 4 ? "#555" : "#222",
          }}
          className="w-[120px] ml-[10px] flex items-center justify-center font-medium good-font tracking-wide rounded-sm cursor-pointer h-[100%]  text-[#fff]"
        >
          Next
        </div>
      </div>
    </div>
  );
};

const Chat = ({ data }) => {
  const [chat, setChat] = useState([]);

  const [input, setInput] = useState("");

  const submit = async () => {
    if (input !== "") {
      const url = "https://pdfgptmolotov.ngrok.app/chatqa_multiple";

      const req = new FormData();
      req.append("user_id", "Parth");
      req.append("query", input);
      req.append("file_id", data.file_id);
      axios.post(url, req).then((e) => {
        console.log(e.data.answer);
        setChat([
          ...chat,
          {
            person: false,
            message: input,
          },
          {
            person: true,
            message: e.data.answer,
          },
        ]);
        setInput("");
      });
    }
  };

  return (
    <div className="w-[100%] flex items-center justify-center ">
      <div
        className=" bg-[#00000060] border-[3px] border-[#fff] mt-[100px] h-[605px] px-[50px] rounded-[3px]
            pt-[30px] pb-[30px] backdrop-blur-xl w-[800px] flex-col flex"
      >
        <p className="text-[25px] text-center text-[#fff] mb-[10px] tracking-wide good-font font-medium ">
          Chat
        </p>
        <div className="w-[100%] h-[100%] overflow-y-auto scroll-bar-cool mb-[30px]">
          {chat.map((item, i) => {
            return (
              <div
                className="w-[100%] px-[20px] py-[15px] rounded-[2px] min-h-[50px] flex items-center justify-center text-[#fff] font-medium good-font capitalize mb-[10px]"
                style={{
                  backgroundColor: item.person ? "#4a4bcc" : "#e4522f",
                }}
              >
                {item.message}
              </div>
            );
          })}
        </div>
        <div className="w-[100%] flex items-center justify-between">
          <input
            type="text"
            placeholder="Type your message here"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="rounded-[5px] px-[10px] text-[15px] font-bold good-font outline-none w-[80%] h-[50px]"
          />
          <div
            onClick={() => {
              if (input !== "") {
                submit();
              }
            }}
            className="w-[18%] justify-center text-[17px] cursor-pointer font-medium  text-[#fff] tracking-wide  px-[20px] flex items-center h-[50px] grady-1 rounded-[5px]"
          >
            Send
          </div>
        </div>
      </div>
    </div>
  );
};

const Content = ({ data ,shorts}) => {
  const opts = {
    height: "400",
    width: "100%",
  };
  const url = data.youtube_link;
  const videoId = url.split("v=")[1];
  const [curr, setCurr] = useState(0);

  //   {
  //     "correct_option": null,
  //     "options": [
  //         "The Armed Forces of Ukraine",
  //         "The Russian Minister of Defense",
  //         "The Freedom of Russia Legion and the Russian Volunteer Corps",
  //         "The PMC Wagner"
  //     ],
  //     "question": "What group claimed to have destroyed several units of Putin's military equipment and was moving forward towards liberating Russia?",
  //     "question_number": 1
  // }
  return (
    <Tween
      from={{
        clipPath: "inset(0px 50vw 0vh 50vw)",
      }}
      to={{
        clipPath: false ? "inset(0px 50vw 0vh 50vw)" : "inset(0px 0vw 0vh 0vw)",
        // clipPath: !showed ? "inset(0px 100% 0px 1px)" : "inset(0px 0px 0% 1px)",
      }}
      duration={1.7}
      ease={Power4.easeInOut}
    >
      <div className="w-[100%] overflow-y-auto h-[100vh] px-[100px] scroll-bar-cool">
        <h1 className="w-[100%] text-[40px] mb-[30px] text-[#fff] tracking-wide font-bold good-font pt-[70px]  text-center">
          {data.title}
        </h1>
        <div className="flex justify-between">
          <div className="w-[48%] h-[400px] relative">
            <div className="w-[100%] flex items-center justify-center h-[100%] bg-[#00000060] backdrop-blur-xl rounded-sm absolute z-10">
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
            </div>

            <div className="w-[100%] h-[100%] backdrop-blur-xl rounded-sm absolute z-20">
              <YouTube opts={opts} videoId={videoId} />
            </div>
          </div>
          <div
            className=" bg-[#00000060] px-[50px] rounded-[3px]
       pt-[30px] pb-[30px] backdrop-blur-xl w-[48%] h-[400px] overflow-y-auto  scroll-bar-cool"
          >
            <p className="text-[25px] text-[#fff] mb-[10px] tracking-wide good-font font-medium ">
              Summary:
            </p>
            <p className="text-[15px] text-[#fff] tracking-wide good-font font-medium ">
              {data.summary}
            </p>
            <p className="text-[25px] mt-[30px] text-[#fff] mb-[10px] tracking-wide good-font font-medium ">
              Notes:
            </p>
            {data.important_points.map((item, i) => {
              return (
                <p
                  className="text-[15px] flex mb-[5px] text-[#fff] tracking-wide good-font font-medium "
                  key={i}
                >
                  <span className="mr-[5px]">•</span> <span>{item}</span>
                </p>
              );
            })}
          </div>
        </div>
        <div className="w-[100%] mt-[40px] h-[400px] flex items-center justify-between">
          {curr === 0 && (
            <Mcqs
              data={data}
              curr={curr}
              next={() => {
                setCurr(curr + 1);
              }}
              prev={() => {
                setCurr(curr - 1);
              }}
            />
          )}
          {curr === 1 && (
            <Mcqs
              data={data}
              curr={curr}
              next={() => {
                setCurr(curr + 1);
              }}
              prev={() => {
                setCurr(curr - 1);
              }}
            />
          )}
          {curr === 2 && (
            <Mcqs
              data={data}
              curr={curr}
              next={() => {
                setCurr(curr + 1);
              }}
              prev={() => {
                setCurr(curr - 1);
              }}
            />
          )}
          {curr === 3 && (
            <Mcqs
              data={data}
              curr={curr}
              next={() => {
                setCurr(curr + 1);
              }}
              prev={() => {
                setCurr(curr - 1);
              }}
            />
          )}
          {curr === 4 && (
            <Mcqs
              data={data}
              curr={curr}
              next={() => {
                setCurr(curr + 1);
              }}
              prev={() => {
                setCurr(curr - 1);
              }}
            />
          )}
          {curr === 5 && (
            <Mcqs
              data={data}
              curr={curr}
              next={() => {
                setCurr(curr + 1);
              }}
              prev={() => {
                setCurr(curr - 1);
              }}
            />
          )}
          {curr === 6 && (
            <Mcqs
              data={data}
              curr={curr}
              next={() => {
                setCurr(curr + 1);
              }}
              prev={() => {
                setCurr(curr - 1);
              }}
            />
          )}
          {curr === 7 && (
            <Mcqs
              data={data}
              curr={curr}
              next={() => {
                setCurr(curr + 1);
              }}
              prev={() => {
                setCurr(curr - 1);
              }}
            />
          )}
          {curr === 8 && (
            <Mcqs
              data={data}
              curr={curr}
              next={() => {
                setCurr(curr + 1);
              }}
              prev={() => {
                setCurr(curr - 1);
              }}
            />
          )}
          {curr === 9 && (
            <Mcqs
              data={data}
              curr={curr}
              next={() => {
                setCurr(curr + 1);
              }}
              prev={() => {
                setCurr(curr - 1);
              }}
            />
          )}
          <ShortAnswers shorts={shorts} />
        </div>
        <Chat data={data} />
        <div className="w-[100%] h-[100px]"></div>
      </div>
    </Tween>
  );
};

const App = () => {
  const [data, setData] = useState(null);
  const [shortAnswers,setAnswers] = useState({});
  console.log(data);

  const shorts = (input) => {
    const req = new FormData();
    req.append("user_id", "Parth");
    req.append("youtube_link", input);
    req.append("num_of_question", 5);
    const url = "https://pdfgptmolotov.ngrok.app/generate_text_questions";
    axios.post(url,req).then((e)=>{
      console.log(e);
      setAnswers(e.data.questions);
    })
  };

  return (
    <div className="w-[100%] h-[100vh]">
      {!data ? (
        <Input
          submitted={(e) => {
            setData(e);
          }}
          shorts={shorts}
        />
      ) : (
        <Content data={data} shorts={shortAnswers} />
      )}
    </div>
  );
};

export default App;
