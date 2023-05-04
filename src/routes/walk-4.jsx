import React, { Suspense } from "react";
import Loader from "../utils/loader";

const Walk4Container = React.lazy(() => import("../views/walk4"));

const Walk4 = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Walk4Container />
    </Suspense>
  );
};

export default Walk4;
