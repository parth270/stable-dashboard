import React, { Suspense } from "react";
const Summarised = React.lazy(() => import("../views/summarised"));

const SummarisedPage = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <Summarised />
  );
};

export default SummarisedPage;
