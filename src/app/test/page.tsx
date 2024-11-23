import React from "react";
import Github from "@/data/github/github";

const page = () => {
  return (
    <div>
      <Github totalRepos={0} totalCommits={0} />
    </div>
  );
};

export default page;
