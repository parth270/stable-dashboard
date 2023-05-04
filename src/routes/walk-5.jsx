import React, { Suspense } from "react";
import Loader from "../utils/loader";

const Walk5Container = React.lazy(() => import("../views/walk5"));

const Walk5 = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Walk5Container />
    </Suspense>
  );
};

export default Walk5;
