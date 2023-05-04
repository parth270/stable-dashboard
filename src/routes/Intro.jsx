import React, { Suspense } from "react";
const Intro = React.lazy(() => import("../views/intro"));

const IntroPage = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <Intro />
  );
};

export default IntroPage;