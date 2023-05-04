import React, { useState } from "react";
import Close from "../close";
import GlobeConnectionsExample from "../globe/globeContainer";
import useWidth from "../../hooks/useWidth";
import useHeight from "../../hooks/useHeigth";

const StatisticsOnlyContainer = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-hidden flex-col items-center">
        <Close />
        <h1 className="text-center text-[#fff] text-[28px] mt-[50px]  font-semibold">
          Statistics Only
        </h1>
        {/* <GlobeConnectionsExample
          vr={false}
        /> */}

        <iframe
          src="https://troika-examples.netlify.app/#globeConnections"
          className="w-[100%] h-[100vh] absolute top-0 left-0"
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
};

export default StatisticsOnlyContainer;
