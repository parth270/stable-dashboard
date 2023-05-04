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
      <Left id={4} />
      <Right id={4} />

      <h1 className="fckin mt-[22px] font-medium text-[#fff] text-[44px] mx-[7%] w-[500px]">
        On Chain Publishing
      </h1>
      <div className="w-[100%] mt-[30px] h-[100%] bg-[#000] relative pr-[450px] pl-[7%] py-[70px]">
        <h3 className="fckin leading-[40px] text-[30px] font-medium text-[#fff] mt-[40px] tracking-wide">
          At the forefront of the ownership economy delivering immersive
          publishing capabilities
        </h3>
        <h3 className="fckin text-[30px] mt-[30px] font-medium text-[#fff] tracking-wide">
          Changing the way, we
        </h3>
        <h3 className="fckin uppercase text-[30px] mt-[-5px] font-medium text-[#ecc867] tracking-wide">
          CREAte {">"} Curate {">"} distribute content
        </h3>
        <h3 className="fckin text-[30px] mt-[30px] font-medium text-[#fff] tracking-wide">
          AI Assisted Web3 Ecosystem for On-Chain Creation, Curation &
          Publishing Immersive Data Driven Experiences
        </h3>
        <img
          src="/bib.png"
          className="w-[450px] h-[450px] absolute bottom-0 right-0 object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Index4;