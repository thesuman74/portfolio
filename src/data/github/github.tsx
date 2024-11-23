// pages/index.tsx
import { GetServerSideProps } from "next";
import React from "react";

// Define types for GitHub API response
type Repo = {
  name: string;
  commits_count: number;
};

type HomeProps = {
  totalRepos: number;
  totalCommits: number;
};

const Github = ({ totalRepos, totalCommits }: HomeProps) => {
  return (
    <div>
      <h1>GitHub Stats</h1>
      <p>Total Repositories: {totalRepos}</p>
      <p>Total Commits: {totalCommits}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const username = process.env.GITHUB_USERNAME; // GitHub username from .env.local
  const token = process.env.GITHUB_TOKEN; // GitHub token from .env.local

  if (!username || !token) {
    return {
      notFound: true,
    };
  }

  // Fetch user repositories
  const reposResponse = await fetch(
    `https://api.github.com/users/${username}/repos`,
    {
      method: "GET",
      headers: {
        Authorization: `token ${token}`, // Authentication with your GitHub token
      },
    }
  );

  const repos = await reposResponse.json();

  // Get total number of commits from all repos
  let totalCommits = 0;
  for (let repo of repos) {
    const commitsResponse = await fetch(
      `https://api.github.com/repos/${username}/${repo.name}/commits`,
      {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    );

    const commits = await commitsResponse.json();
    totalCommits += commits.length;
  }

  return {
    props: {
      totalRepos: repos.length,
      totalCommits,
    },
  };
};

export default Github;
