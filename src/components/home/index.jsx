import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { setLoading } from "../../services/Model";
import { useDispatch } from "react-redux";

const Item = ({ title, route, icon, width, height }) => {
  const router = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className=" flex flex-col items-center cursor-pointer">
      <div
        className="w-[80%] h-[140px] bg-[#000] rounded-2xl flex items-center justify-center "
        onClick={() => {
          dispatch(setLoading(true));
          setTimeout(() => {
            router(route);
            dispatch(setLoading(false));
          }, 1700);
        }}
      >
        <img
          src={icon}
          alt=""
          className="object-contain"
          style={{
            width: width,
            height: height,
          }}
        />
      </div>
      <h4 className="text-[18px] text-center font-medium tracking-wider text-[#75FB8E] mt-[6px]">
        {title}
      </h4>
    </div>
  );
};

const HomeContainer = () => {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col pt-[50px] pb-[30px]  items-center">
      <h1 className="text-center text-[#fff] text-[28px]  font-semibold">
        How would you like to experience your report?
      </h1>
      <div className=" h-[400px] w-[800px] grid grid-rows-2 grid-cols-4 mt-[94px] gap-x-[30px] gap-y-[20px]">
        <Item title="Ai Query" route="ai-querry" icon="/brain.png" width={50} />
        <Item
          title="Statistics Only"
          route="statistics-only"
          icon="/stats.png"
          width={40}
        />
        <Item
          title="Summarised"
          route="summarised"
          icon="/mic.png"
          width={40}
        />
        <Item title="Narrated" route="narrated" icon="/play.png" width={40} />
        <Item
          title="Video Driven"
          route="video-driven"
          icon="/woman.png"
          width={24}
        />
        <Item title="Avatars" route="avatars" icon="/web.png" width={50} />
        <Item
          title="Immersive Experience"
          route="immersive-experience"
          icon="/web.png"
        />
        <Item
          title="Combination"
          route="combination"
          icon="/mic.png"
          width={40}
        />
      </div>
    </div>
  );
};

export default HomeContainer;
