import React from "react";

const Walk5Container = React.lazy(() => import("../views/walk5"));

const Walk5 = () => {
  return <Walk5Container />;
};

export default Walk5;