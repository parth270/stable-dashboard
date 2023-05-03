import React, { Suspense } from "react";
import NarratedContainer from "../components/Narrated/index";
import HomeLayout from "../layouts";

const NarratedPage = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <HomeLayout>
      <NarratedContainer />
    </HomeLayout>
  );
};

export default NarratedPage;
