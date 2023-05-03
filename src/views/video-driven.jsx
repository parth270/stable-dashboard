import React, { Suspense } from "react";
import HomeLayout from "../layouts";
import VideoDrivenContainer from "../components/VideoDriven";

const VideoDrivenPage = () => {
  return (
    <HomeLayout>
      <VideoDrivenContainer />
    </HomeLayout>
  );
};

export default VideoDrivenPage;
