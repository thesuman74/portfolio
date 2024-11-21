"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="6px"
        color="#ff3c20"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressProviders;
