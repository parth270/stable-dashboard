import React, { Suspense } from "react";
import Loader from "../utils/loader";
const VideoDriven = React.lazy(() => import("../views/video-driven"));

const VideoDrivenPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <VideoDriven />
    </Suspense>
  );
};

export default VideoDrivenPage;
