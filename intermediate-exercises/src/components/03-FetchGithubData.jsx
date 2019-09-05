import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const GithubRepos = ({ repos }) => {
  return (
    <ul className="repoList">
      {repos
        ? repos.map(repo => {
            return (
              <li>
                {" "}
                <a href={repo.repoUrl}>{repo.repoName}</a>
              </li>
            );
          })
        : null}
    </ul>
  );
};

GithubRepos.propTypes = {
  repos : PropTypes.array.isRequired,
};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      repos: []
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  filterGitApiResponse(response) {
    return response.map(repo => {
      return { repoName: repo.name, repoUrl: repo.html_url };
    });
  }

  handleOnClick() {
    try {
      axios
        .get(`https://api.github.com/users/${this.state.username}/repos`)
        .then(response => {
          this.setState({ repos: this.filterGitApiResponse(response.data) });
          console.log(this.filterGitApiResponse(response.data));
        })
        .catch(error => {
          this.setState({ repos: [] });
          console.log("error", error);
        });
    } catch (e) {
      console.error(`Request Could not be made. ${e}`);
    }
  }

  handleOnChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <div>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          name="username"
          required={true}
          onChange={this.handleOnChange}
        />
        <button
          onClick={() => {
            this.handleOnClick();
          }}
          disabled={this.state.username == "" ? true : false}
        >
          Get Repos
        </button>
        {this.state.repos ? (
          <React.Fragment>
            <br />
            <GithubRepos repos={this.state.repos} />
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default UsernameForm;
