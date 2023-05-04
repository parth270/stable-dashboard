import React from "react";

const Walk4Container = React.lazy(() => import("../views/walk4"));

const Walk4 = () => {
  return <Walk4Container />;
};

export default Walk4;
