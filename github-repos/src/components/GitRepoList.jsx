import React from "react";

export default function GitRepoList({ gitRepos }) {
  return (
    <ol className="GitRepoList">
      {gitRepos.map((repo, index) => (
        <li
          className="GitRepoItem"
          style={{ order: index + 1}}
        >
          <a href={repo.repoUrl}>{`${index + 1} ${repo.repoName}`}</a>
        </li>
      ))}
    </ol>
  );
}
