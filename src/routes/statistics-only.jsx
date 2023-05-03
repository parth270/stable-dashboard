import React, { Suspense } from "react";
const StatisticsOnly = React.lazy(() => import("../views/statistics-only"));

const StatisticsOnlyPage = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <StatisticsOnly />
  );
};

export default StatisticsOnlyPage;
