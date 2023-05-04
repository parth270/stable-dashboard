import React, { useState } from "react";
import Close from "../close";
import GlobeConnectionsExample from "../globe/globeContainer";
import useWidth from "../../hooks/useWidth";
import useHeight from "../../hooks/useHeigth";
// import D3Container from "./d3Container";

const StatisticsOnlyContainer = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-x-hidden overflow-y-scroll flex scroll-bar-cool flex-col items-center">
        <Close />
        {/* <iframe
          src="https://troika-examples.netlify.app/#globeConnections"
          className="w-[100%] h-[100vh] "
          frameborder="0"
        ></iframe> */}
        <h1 className="text-center text-[#fff] text-[28px] mb-[50px] mt-[100px] font-semibold">
          Marvelous Reports
        </h1>
        <iframe
          src="https://flo.uri.sh/visualisation/13639521/embed"
          title="Interactive or visual content"
          class="flourish-embed-iframe"
          frameborder="0"
          scrolling="no"
          className="w-[80%] h-[600px] bg-[transparent] shrink-0 mb-[100px]"
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
        <h1 className="text-center text-[#fff] text-[28px] mb-[50px]  font-semibold">
          We will Take your business to the sky!
        </h1>
        <iframe
          src="https://flo.uri.sh/visualisation/13639531/embed"
          title="Interactive or visual content"
          class="flourish-embed-iframe"
          frameborder="0"
          scrolling="no"
          className="w-[80%] h-[600px] bg-[transparent] shrink-0 mb-[100px]"
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
        <h1 className="text-center text-[#fff] tracking-wide text-[28px] mb-[50px]  font-semibold">
          Brilliants Representations
        </h1>
        <iframe
          src="https://flo.uri.sh/visualisation/13639491/embed"
          title="Interactive or visual content"
          class="flourish-embed-iframe"
          frameborder="0"
          scrolling="no"
          className="w-[80%] h-[600px] bg-[transparent] shrink-0 mb-[100px]"
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
        <h1 className="text-center text-[#fff] tracking-wide text-[28px] mb-[50px]  font-semibold">
          Brilliants Representations
        </h1>
        <img
          src="11.gif"
          className="w-[80%] h-[600px] rounded-[40px]  bg-[#000000] shrink-0 mb-[100px]"
          style={{
            objectFit: "contain",
          }}
          alt=""
        />
        {/* <h1 className="text-center text-[#fff] text-[28px] mb-[-20px] mt-[0px] font-semibold">
          Marvelous Reports
        </h1> */}
        {/* <GlobeConnectionsExample vr={false} /> */}

        {/* <iframe
          src="https://flo.uri.sh/visualisation/13639521/embed"
          title="Interactive or visual content"
          class="flourish-embed-iframe"
          frameborder="0"
          scrolling="no"
          className="w-[100%] h-[600px]"

          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe> */}
        {/* <D3Container/> */}
      </div>
    </>
  );
};

export default StatisticsOnlyContainer;
