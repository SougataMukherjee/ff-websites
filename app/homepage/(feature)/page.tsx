"use client";
import React from "react";
// import Skeleton from "@/components/skeleton/Skeleton";
import dynamic from "next/dynamic";
// import Feature from "./Feature";
const Feature = dynamic(() => import("./Feature"), {
  ssr: false,
  // loading: () => <Skeleton />,
});

const Home = () => {
  return (
    <div>
      {/* <Suspense fallback={<Skeleton />}> */}
      <Feature />
      {/* </Suspense> */}
    </div>
  );
};

export default Home;
