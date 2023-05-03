import React, { Suspense } from "react";
import HomeLayout from "../layouts";
import StatisticsOnlyContainer from "../components/StatisticsOnly";

const StatisticsOnlyPage = () => {
  return (
    <HomeLayout>
      <StatisticsOnlyContainer />
    </HomeLayout>
  );
};

export default StatisticsOnlyPage;
