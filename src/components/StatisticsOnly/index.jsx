import React, { useState } from "react";
import Close from "../close";
import GlobeConnectionsExample from "../globe/globeContainer";
import useWidth from "../../hooks/useWidth";
import useHeight from "../../hooks/useHeigth";

const StatisticsOnlyContainer = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] relative overflow-x-hidden overflow-y-scroll scroll-bar-cool flex-col items-center">
        <Close />

        {/* <GlobeConnectionsExample
          vr={false}
        /> */}

        <iframe
          src="https://troika-examples.netlify.app/#globeConnections"
          className="w-[100%] h-[100vh] "
          frameborder="0"
        ></iframe>
        <iframe
          src="https://flo.uri.sh/visualisation/13639521/embed"
          title="Interactive or visual content"
          class="flourish-embed-iframe"
          frameborder="0"
          scrolling="no"
          className="w-[100%] h-[600px]"
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
        <iframe
          src="https://flo.uri.sh/visualisation/13639531/embed"
          title="Interactive or visual content"
          class="flourish-embed-iframe"
          frameborder="0"
          scrolling="no"
          className="w-[100%] h-[600px]"
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
        <iframe
          src="https://flo.uri.sh/visualisation/13639491/embed"
          title="Interactive or visual content"
          class="flourish-embed-iframe"
          frameborder="0"
          scrolling="no"
          className="w-[100%] h-[600px]"
          sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
        ></iframe>
        {/* <D3Container/> */}
      </div>
    </>
  );
};

export default StatisticsOnlyContainer;
