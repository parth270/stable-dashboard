import React from "react";

const Walk1Container = React.lazy(() => import("../views/walk1"));

const Walk1 = () => {
  return <Walk1Container />;
};

export default Walk1;
