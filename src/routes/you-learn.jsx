import React, { Suspense } from "react";
const YouLearn = React.lazy(() => import("../views/you-learn.jsx"));

const Youlearn = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <YouLearn />
  );
};

export default Youlearn;
