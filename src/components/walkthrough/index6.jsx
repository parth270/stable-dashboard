import React from "react";
import Left from "./left";
import Right from "./right";

const Item = ({ src, title }) => {
  return (
    <div className="w-[250px] rounded-lg h-[190px] flex flex-col mr-[40px] px-[20px] py-[30px] bg-[#0f0f0f] ">
      <img className="w-[70px] object-contain" src={src} alt="" />
      <h3 className="fckin text-[17px] font-medium text-[#fff] mt-auto tracking-wide">
        {title}
      </h3>
    </div>
  );
};

const Index4 = () => {
  return (
    // <h1 className="text-center text-[#fff] text-[28px]  font-semibold">
    //   How would you like to experience your report?
    // </h1>

    <div className="w-[100%] h-[100vh] flex flex-col   relative   ">
      <Left id={6} />
      <Right id={6} />

      <h1 className="fckin mt-[22px] font-medium text-[#fff] text-[44px] mx-[7%] w-[500px]">
        Immersive Experiences
      </h1>
      <div className="w-[100%] mt-[30px] h-[100%] bg-[#000] relative pr-[450px] pl-[7%] py-[70px]">
        <h3 className="fckin leading-[40px] text-[30px] font-medium text-[#fff] mt-[40px] tracking-wide">
          Immersive and data-driven bespoke report creation as well as turnkey
          services makes your publication engaging, Interactive and appealing to
          the communities of <span className="text-[#99f899]">NOW</span>
        </h3>
        <div className="w-[500px] h-[200px] grid grid-rows-4 grid-cols-2">
          <h3 className="fckin leading-[40px] text-[20px] font-medium text-[#fff] mt-[40px] tracking-wide">
            <span className="text-[#99f899]">Ai Querry</span>
          </h3>
          <h3 className="fckin leading-[40px] text-[20px] font-medium text-[#fff] mt-[40px] tracking-wide">
            <span className="text-[#99f899]">Avatars</span>
          </h3>
          <h3 className="fckin leading-[40px] text-[20px] font-medium text-[#fff] mt-[40px] tracking-wide">
            <span className="text-[#99f899]">Statistics Only</span>
          </h3>
          <h3 className="fckin leading-[40px] text-[20px] font-medium text-[#fff] mt-[40px] tracking-wide">
            <span className="text-[#99f899]">Immersive Experience</span>
          </h3>
          <h3 className="fckin leading-[40px] text-[20px] font-medium text-[#fff] mt-[40px] tracking-wide">
            <span className="text-[#99f899]">Narrated</span>
          </h3>
          <h3 className="fckin leading-[40px] text-[20px] font-medium text-[#fff] mt-[40px] tracking-wide">
            <span className="text-[#99f899]">Turnkey Solutions</span>
          </h3>
          <h3 className="fckin leading-[40px] text-[20px] font-medium text-[#fff] mt-[40px] tracking-wide">
            <span className="text-[#99f899]">Video Driven</span>
          </h3>
          <h3 className="fckin leading-[40px] text-[20px] font-medium text-[#fff] mt-[40px] tracking-wide">
            <span className="text-[#99f899]">On-Chain Solutions</span>
          </h3>
        </div>
        <img
          src="/got.png"
          className="w-[1500px] h-[1500px] absolute bottom-[-780px] right-[-400px] object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Index4;
