import React, { Suspense } from "react";
const Avatars = React.lazy(() => import("../views/avatars"));

const AvatarsPage = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <Avatars />
  );
};

export default AvatarsPage;
