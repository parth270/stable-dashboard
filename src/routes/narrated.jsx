import React, { Suspense } from "react";
const Narrated = React.lazy(() => import("../views/narrated"));

const NarratedPage = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <Narrated />
  );
};

export default NarratedPage;
