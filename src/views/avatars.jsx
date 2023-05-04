import React, { Suspense } from "react";
import AvatarContainer from "../components/Avatar/index";
import HomeLayout from "../layouts";

const AvatarPage = () => {
  return (
    // <Suspense fallback={<Loader />}>
    <HomeLayout>
      <AvatarContainer />
    </HomeLayout>
  );
};

export default AvatarPage;
