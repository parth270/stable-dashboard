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
      <Left id={7} />
      <Right id={7} />

      <h1 className="fckin mt-[22px] font-medium text-[#fff] text-[44px] mx-[7%] w-[500px]">
        PR & Communities
      </h1>
      <div className="w-[100%] mt-[30px] flex h-[100%] bg-[#000] relative px-[7%] py-[70px]">
        <div className="w-[100%]">
          <h3 className="fckin leading-[40px] text-[30px] font-medium uppercase text-[#ecc867] mt-[40px] tracking-wide">
            Targetting Startups + Communities
          </h3>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[40px] tracking-wide">
            Onboard Web3 Startups on Notified(Via Blue chips).
          </li>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[0px] tracking-wide">
            Provide services to target startups as well as community members
          </li>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[0px] tracking-wide">
            Whole new Ecosystem of Web 3 Startups & Founders
          </li>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[0px] tracking-wide">
            Web 3 Packages
          </li>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[0px] tracking-wide">
            Token Gated Report Feature Access
          </li>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[0px] tracking-wide">
            Allows Cross targeting from Web 2 into Web 3 as well.
          </li>
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
