import React, { Suspense } from "react";
import HomeLayout from "../layouts";
import AiQuerryContainer from "../components/AiQuerry";

const AiQuerryPage = () => {
  return (
    <HomeLayout>
      <AiQuerryContainer />
    </HomeLayout>
  );
};

export default AiQuerryPage;
