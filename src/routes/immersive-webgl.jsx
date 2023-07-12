import React, { Suspense } from "react";
import Loader from "../utils/loader";
const ImmersiveExperience = React.lazy(() =>
  import("../views/webgl-experience.jsx")
);

const ImmersiveExperiencePage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ImmersiveExperience />
    </Suspense>
  );
};

export default ImmersiveExperiencePage;
