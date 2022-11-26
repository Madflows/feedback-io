import React from "react";
import { NextSeo } from "next-seo";

const Page = ({ name, path, children }) => {
  const title = `Feedback.io – ${name}`;
  const url = `https://feedback.io${path}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      {children}
    </>
  );
};

export default Page;
