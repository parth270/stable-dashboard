import React, { Suspense } from "react";

const AiQuerry = React.lazy(() => import("../views/ai-querry"));

const AiQuerryPage = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <AiQuerry />
  );
};

export default AiQuerryPage;
