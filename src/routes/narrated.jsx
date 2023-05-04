import React, { Suspense } from "react";
import Loader from "../utils/loader";
const Narrated = React.lazy(() => import("../views/narrated"));

const NarratedPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Narrated />
    </Suspense>
  );
};

export default NarratedPage;
