import React, { Suspense } from "react";
import Loader from "../utils/loader";

const AiQuerry = React.lazy(() => import("../views/ai-querry"));

const AiQuerryPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AiQuerry />
    </Suspense>
  );
};

export default AiQuerryPage;
