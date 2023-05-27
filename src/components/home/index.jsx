import React, { useState } from "react";
import { redirect, useNavigate, useNavigation } from "react-router-dom";
import { setLoading } from "../../services/Model";
import { useDispatch } from "react-redux";

const Item = ({ title, route, icon, width, height }) => {
  const router = useNavigate();
  const dispatch = useDispatch();
  // return (
  //   <div className=" flex flex-col items-center cursor-pointer">
  //     <div
  //       className="w-[80%] h-[180px] shrink-0 bg-[#000] rounded-2xl flex items-center justify-center "
  //       onClick={() => {
  //         dispatch(setLoading(true));
  //         setTimeout(() => {
  //           router(route, {
  //             replace: true,
  //           });
  //           dispatch(setLoading(false));
  //         }, 1700);
  //       }}
  //     >
  //       <img
  //         src={icon}
  //         alt=""
  //         className="object-contain"
  //         style={{
  //           width: width,
  //           height: height,
  //         }}
  //       />
  //     </div>
  //     <h4 className="text-[18px] fckin text-center font-medium tracking-wider text-[#75FB8E] mt-[6px]">
  //       {title}
  //     </h4>
  //   </div>
  // );
  return (
    <h1
      className="text-[#fff] shrink-0 w-[100%] hover:text-[#43d2db] mt-[20px] text-[36px] hover:underline cursor-pointer flex items-center fckin "
      onClick={() => {
        dispatch(setLoading(true));
        setTimeout(() => {
          router(route, {
            replace: true,
          });
          dispatch(setLoading(false));
        }, 1700);
      }}
    >
      {title}
    </h1>
  );
};

const HomeContainer = () => {
  const [screen, setScreen] = useState({
    w: 0,
    h: 0,
  });
  const handleResize = () => {
    setScreen({
      w: window.innerWidth,
      h: window.innerHeight,
    });
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="w-[100%] h-[100vh] flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: "url('/bg-3.png')",
        backgroundColor: "#fff",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-[#fff] shrink-0 w-[100%] text-[50px] h-[100px] flex items-center pl-[200px] fckin font-semibold">
        Enhanced report Features
      </h1>
      <div className=" h-[100%] w-[100%] bg-[#00000090]  flex relative">
        <div className="w-[50%] h-[100%] flex flex-col justify-center pl-[15%] items-center">
          <Item
            title="Immersive Experience"
            route="/immersive-experience"
            icon="/web.png"
            width={50}
          />
          <Item
            title="Ai Query"
            route="/ai-querry"
            icon="/brain.png"
            width={50}
          />
          <Item title="Narrated" route="/narrated" icon="/mic.png" width={40} />
          <Item
            title="Video Driven"
            route="/video-driven"
            icon="/play.png"
            width={40}
          />
          <Item title="Avatars" route="/avatars" icon="/woman.png" width={24} />
          <Item
            title="Talking Points"
            route="/walkthrough/4"
            icon="/key.png"
            width={50}
          />
          <Item
            title="Products"
            route="/walkthrough/8"
            icon="/key.png"
            width={50}
          />
        </div>
        <img
          src="/face-1.png"
          style={{
            height: screen.h - 100,
          }}
          className=" absolute scale-111 right-0"
          alt=""
        />
        {/* 
        <Item
          title="Statistics Only"
          route="/statistics-only"
          icon="/stats.png"
          width={40}
        />

  
        <Item
          title="On-Chain Solutions"
          route="/on-chain-solutions"
          icon="/feather.png"
          width={40}
        /> */}
      </div>
    </div>
  );
};

export default HomeContainer;
