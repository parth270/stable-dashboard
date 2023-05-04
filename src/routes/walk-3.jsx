import React from "react";

const Walk3Container = React.lazy(() => import("../views/walk3"));

const Walk3 = () => {
  return <Walk3Container />;
};

export default Walk3;
