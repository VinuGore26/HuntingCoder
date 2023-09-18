import React from "react";
import { useRouter } from "next/router";

const about = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>This is an Services page.</h1>
    </div>
  );
};

export default about;
