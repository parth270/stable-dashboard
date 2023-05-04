import React from "react";

const Wall7Container = React.lazy(() => import("../views/walk7"));

const Wall7 = () => {
  return <Wall7Container />;
};

export default Wall7;
