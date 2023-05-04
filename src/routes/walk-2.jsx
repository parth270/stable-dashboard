import React from "react";

const Walk2Container = React.lazy(() => import("../views/walk2"));

const Walk2 = () => {
  return <Walk2Container />;
};

export default Walk2;
