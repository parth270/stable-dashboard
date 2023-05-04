import React, { Suspense } from "react";
import Loader from "../utils/loader";
const Intro = React.lazy(() => import("../views/intro"));

const IntroPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Intro />
    </Suspense>
  );
};

export default IntroPage;
