import React, { useState } from "react";
import GitRepoList from "./GitRepoList";
import axios from "axios";

export default function GitRepoForm() {
  const [gitUsername, setGitUsername] = useState("");
  const [gitRepos, setGitRepos] = useState([]);
  const filterGitApiResponse = response => {
    return response.map(repo => {
      return { repoName: repo.name, repoUrl: repo.html_url };
    });
  };
  const getGitRepos = () => {
    try {
      axios
        .get(`https://api.github.com/users/${gitUsername}/repos`)
        .then(response => {
          setGitRepos(filterGitApiResponse(response.data));
          console.log(filterGitApiResponse(response.data));
        })
        .catch(error => {
          setGitRepos([]);
          console.log("error", error);
        });
    } catch (e) {
      console.error(`Request Could not be made. ${e}`);
    }
  };
  return (
    <div>
      <form className="GithubRepoForm">
        <fieldset>
          <legend>Fetch Github Repos</legend>
          <label htmlFor="gitUsername"></label>
          <input
            name="gitUsername"
            type="text"
            value={gitUsername}
            onChange={e => setGitUsername(e.target.value)}
          />
          <input
            type="submit"
            onSubmit={e => {
              e.preventDefault();
              getGitRepos();
            }}
          />
        </fieldset>
      </form>
      <GitRepoList />
    </div>
  );
}
