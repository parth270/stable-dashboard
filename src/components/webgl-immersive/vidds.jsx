import React from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../services/Model";

const Vid = ({ src }) => {
  const dispatch = useDispatch();
  return (
    // <video
    //   className="w-[400px] mr-[40px]  cursor-pointer cursor-pointer "
    //   autoPlay
    //   style={{
    //     zIndex: 99999999,
    //   }}
    //   onLoad={() => {
    //     dispatch(setLoading(false));
    //   }}
    //   playsInline
    //   loop
    //   src={src}
    //   muted={true}
    // ></video>
    <iframe
      src={src}
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      className="w-[400px] mr-[40px] h-[240px]  cursor-pointer cursor-pointer "
      title="MESMR"
    ></iframe>
  );
};

export default Vid;
