import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../services/Model";

const Admin = () => {
  const state = useSelector((state) => state.model);
  const dispatch = useDispatch();
  const router = useNavigate();
  const [url, setUrl] = useState(null);
  const [video, setVideo] = useState(null);
  // React.useEffect(() => {
  //   if (!url) {
  //     const check = localStorage.getItem("admin");
  //     const check1 = localStorage.getItem("video");
  //     console.log(check1);
  //     if (check) {
  //       setUrl(check);
  //       if (video) {
  //         setVideo(true);
  //       } else {
  //         setVideo(false);
  //       }
  //     } else {
  //       router("/home");
  //     }
  //   }
  // });

  console.log(video);
  console.log(state);
  return (
    <div
      className="w-[100%] h-[100vh] cursor-pointer"
      onClick={() => {
        dispatch(setLoading(true));
        setTimeout(() => {
          router("/home");
          dispatch(setLoading(false));
        }, 1700);
      }}
    >
      {/* <iframe
        src={url}
        className="w-[100%] h-[100vh]"
        frameborder="0"
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      ></iframe> */}
      {/* <img src={url} alt="" className="w-[100%] h-[100vh]" /> */}
      {/* {!video ? (
        <img src={url} alt={""} className="w-[100%] h-[100vh] object-cover" />
      ) : (
        <video
          src={url}
          alt={""}
          className="w-[100%] h-[100vh] object-cover "
          autoPlay
        ></video>
      )} */}
      {!state.video? (
        <img
          src={state.adminUrl}
          alt={""}
          className="w-[100%] h-[100vh] object-cover"
        />
      ) : (
        <video
          src={state.adminUrl}
          alt={""}
          className="w-[100%] h-[100vh] object-cover "
          autoPlay
        ></video>
      )}
    </div>
  );
};

export default Admin;
