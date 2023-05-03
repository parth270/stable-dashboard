import React, { Suspense } from "react";
import SummarisedContainer from "../components/Summarised/index";
import HomeLayout from "../layouts";

const SummarisedPage = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <HomeLayout>
      <SummarisedContainer />
    </HomeLayout>
  );
};

export default SummarisedPage;
