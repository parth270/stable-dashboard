import React from "react";
import Chart from "../charts/index";
import { Tween } from "react-gsap";
import { Power4 } from "gsap";
import { useSelector } from "react-redux";

const Model = ({ title, content }) => {
  return (
    <>
      <div
        className="w-[100%] flex justify-center  absolute top-[0] left-0 h-[100vh]"
        style={{ zIndex: 1009 }}
      >
        <Tween
          from={{
            clipPath: "inset(0px 670px 1px 680px)",
          }}
          to={{
            clipPath: false
              ? "inset(0px 670px 1px 680px)"
              : "inset(0px 0vw 1px 0px)",
          }}
          ease={Power4.easeInOut}
          duration={0.7}
        >
          <div className="w-[100%] h-[100%] pl-[100px] flex justify-between items-center ">
            <div className="w-[55%] py-[25px] rounded-3xl h-[550px] backdrop-blur-xl bg-[#00000060] flex flex-col justify-center px-[40px]">
              <h1 className="text-[#fff] fckin  font-medium text-[35px] mb-[10px]">
                {title}:
              </h1>
              <div className="w-[100%] overflow-y-auto scroll-bar-cool h-[400px] pr-[50px]">
                {content.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className="text-[#fff] fckin list-inside text-[18px] mt-[10px] font-medium"
                    >
                      {item}
                    </li>
                  );
                })}
              </div>
            </div>
            <div className="w-[45%] h-[400px] ">
              <iframe
                src="https://flo.uri.sh/visualisation/13639521/embed"
                title="Interactive or visual content"
                class="flourish-embed-iframe"
                frameborder="0"
                scrolling="no"
                className="w-[100%] translate-y-[-50px] h-[500px] bg-[transparent] shrink-0 mb-[100px]"
                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
              ></iframe>
            </div>
          </div>
        </Tween>
      </div>
    </>
  );
};

export default Model;
