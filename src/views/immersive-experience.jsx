import React, { Suspense } from "react";
import ImmersiveContainer from "../components/Immersive/index";
import HomeLayout from "../layouts";

const ImmersivePage = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <HomeLayout>
      <ImmersiveContainer />
    </HomeLayout>
  );
};

export default ImmersivePage;
