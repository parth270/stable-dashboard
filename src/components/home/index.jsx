import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { setLoading } from "../../services/Model";
import { useDispatch } from "react-redux";

const Item = ({ title, route }) => {
  const router = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className=" flex flex-col items-center cursor-pointer">
      <div
        className="w-[80%] h-[115px] bg-[#fff] rounded-2xl"
        onClick={() => {
          dispatch(setLoading(true));
          setTimeout(() => {
            router(route);
            dispatch(setLoading(false));
          }, 1700);
        }}
      ></div>
      <h4 className="text-[18px] text-center font-bold tracking-wide text-[#fff] mt-[9px]">
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
      <div className=" h-[530px] w-[530px] grid grid-rows-3 grid-cols-3 mt-[30px] gap-x-[30px] gap-y-[20px]">
        <Item title="Ai Query" route="ai-querry" />
        <Item title="Statistics Only" route="statistics-only" />
        <Item title="Summarised" route="summarised" />
        <Item title="Narrated" route="narrated" />
        <Item title="Video Driven" route="video-driven" />
        <Item title="Avatars" route="avatars" />
        <Item title="Immersive Experience" route="immersive-experience" />
        <Item title="Combination" route="combination" />
      </div>
    </div>
  );
};

export default HomeContainer;
