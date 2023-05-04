import React from "react";

const IntroContainer = React.lazy(() => import("../views/IntroVid"));

const IntroVid = () => {
  return <IntroContainer />;
};

export default IntroVid;
