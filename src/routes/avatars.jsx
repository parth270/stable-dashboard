import React, { Suspense } from "react";
import Loader from "../utils/loader";
const Avatars = React.lazy(() => import("../views/avatars"));

const AvatarsPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Avatars />
    </Suspense>
  );
};

export default AvatarsPage;
