import React, { Suspense } from "react";
import Loader from "../utils/loader";

const Home = React.lazy(() => import("../views/index"));

const HomePage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  );
};

export default HomePage;
