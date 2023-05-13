import React from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../services/Model";

const Vid = ({ src }) => {
  const dispatch = useDispatch();
  return (
    <video
      className="w-[400px] mr-[40px]  cursor-pointer cursor-pointer "
      autoPlay
      style={{
        zIndex: 99999999,
      }}
      onLoad={() => {
        dispatch(setLoading(false));
      }}
      playsInline
      //   onMouseOver={() => {
      //     // if (!play) {
      //     videoEl.current.play();
      //     setPlay(true);
      //     // } else {

      //     // }
      //   }}
      //   onMouseLeave={() => {
      //     videoEl.current.pause();
      //     setPlay(false);
      //   }}
      loop
      src={src}
      muted={true}
    ></video>
  );
};

export default Vid;
