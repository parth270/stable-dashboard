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
      <Left id={5} />
      <Right id={5} />

      <h1 className="fckin mt-[22px] font-medium text-[#fff] text-[44px] mx-[7%] w-[500px]">
        On Chain Publishing
      </h1>
      <div className="w-[100%] mt-[30px] flex h-[100%] bg-[#000] relative px-[7%] py-[70px]">
        <div className="w-[65%]">
          <h3 className="fckin leading-[40px] text-[30px] font-medium uppercase text-[#ecc867] mt-[40px] tracking-wide">
            Features:
          </h3>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[40px] tracking-wide">
            Internal controlled distributions networks
          </li>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[0px] tracking-wide">
            Embedded / Custodial Wallets
          </li>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[0px] tracking-wide">
            Targetable User data base
          </li>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[0px] tracking-wide">
            Allocate reports departmentally
          </li>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[0px] tracking-wide">
            Token Gated Report Feature Access
          </li>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[0px] tracking-wide">
            NFT based subscriptions
          </li>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[0px] tracking-wide">
            Token Gated Data Rooms
          </li>
        </div>
        <div className="w-[35%]">
          <h3 className="fckin leading-[40px] text-[30px] font-medium uppercase text-[#ecc867] mt-[40px] tracking-wide">
            Value:
          </h3>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[40px] tracking-wide">
            Security
          </li>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[0px] tracking-wide">
            Control on Piracy
          </li>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[0px] tracking-wide">
            User tracking
          </li>
          <h3 className="fckin leading-[40px] text-[30px] font-medium uppercase text-[#ecc867] mt-[40px] tracking-wide">
            Monetization:
          </h3>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[40px] tracking-wide">
           Fractional Purchases
          </li>
          <li className="fckin leading-[40px] text-[25px] font-medium  text-[#fff] mt-[0px] tracking-wide">
           Royalty Reselling
          </li>
        </div>
        <img
          src="/got.png"
          className="w-[600px] h-[600px] absolute bottom-[-410px] left-[-300px] object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Index4;
