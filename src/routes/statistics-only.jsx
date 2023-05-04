import React, { Suspense } from "react";
import Loader from "../utils/loader";
const StatisticsOnly = React.lazy(() => import("../views/statistics-only"));

const StatisticsOnlyPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <StatisticsOnly />
    </Suspense>
  );
};

export default StatisticsOnlyPage;
