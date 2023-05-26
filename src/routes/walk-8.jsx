import React, { Suspense } from "react";
import Loader from "../utils/loader";

const Wall7Container = React.lazy(() => import("../views/walk8.jsx"));

const Wall7 = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Wall7Container />
    </Suspense>
  );
};

export default Wall7;
