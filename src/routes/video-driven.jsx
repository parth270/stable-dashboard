import React, { Suspense } from "react";
const VideoDriven = React.lazy(() => import("../views/video-driven"));

const VideoDrivenPage = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <VideoDriven />
  );
};

export default VideoDrivenPage;
