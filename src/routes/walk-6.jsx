import React from "react";
import Loader from "../utils/loader";

const Walk6Container = React.lazy(() => import("../views/walk6"));

const Walk6 = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Walk6Container />
    </Suspense>
  );
};

export default Walk6;
