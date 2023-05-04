import React, { Suspense } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../services/Model";

// const IntroContainer = () => {
//   const router = useNavigate();
//   const dispatch = useDispatch();
//   return (
//     <div className="w-[100%] h-[100vh] relative overflow-hidden flex-col flex items-center justify-center ">
//       <img src="/logo.gif" className="translate-y-[-80px]" alt="" />
//       <div className="w-[100%] shrink-0  h-[200px] bg-[#000] flex items-center justify-center absolute bottom-0">
//         <img src="/title-intro.png" className="w-[600px]" alt="" />
//         <img
//           src="/player.png"
//           className="w-[50px] cursor-pointer translate-y-[24px] translate-x-[20px]"
//           alt=""
//           onClick={() => {
//             dispatch(setLoading(true));
//             setTimeout(() => {
//               router("/home");
//               dispatch(setLoading(false));
//             }, 1700);
//           }}
//         />
//       </div>
//     </div>
//   );
// };

const IntroContainer = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
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
      <Suspense fallback={null} >
        <img
          src="/bg-2.png"
          className="w-[100%] h-[100vh] object-cover"
          alt=""
        />
      </Suspense>
    </div>
  );
};

export default IntroContainer;
