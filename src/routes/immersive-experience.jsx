import React, { Suspense } from "react";
const ImmersiveExperience = React.lazy(() => import("../views/immersive-experience"));

const ImmersiveExperiencePage = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <ImmersiveExperience />
  );
};

export default ImmersiveExperiencePage;
