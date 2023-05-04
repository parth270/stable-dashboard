import React from "react";
import Loader from "../utils/loader";

const IntroContainer = React.lazy(() => import("../views/IntroVid"));

const IntroVid = () => {
  return (
    <Suspense fallback={<Loader />}>
      <IntroContainer />
    </Suspense>
  );
};

export default IntroVid;
