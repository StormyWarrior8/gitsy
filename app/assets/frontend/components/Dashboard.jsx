var React = require('react');
var RepoList = require('RepoList');
var Readme = require('Readme');
var Nav = require('Nav');
var Sidebar = require('Sidebar');
var RepoAPI = require('RepoAPI');
var Tools = require('Tools');

var Dashboard = React.createClass({
  getInitialState: function() {
    return {
      allStarredRepos: [],
      currentStarredRepos: [],
      selectedRepoCloneUrl: '',
      selectedRepoReadmeUrl: '',
      selectedRepoId: undefined,
      repoActivated: false,
      searchText: ''
    }
  },
  componentDidMount: function () {
    /* currentStarredRepos will be the ones showing up in the ui */
    /* while allStarredRepos will serve to just look up and update currentStarredRepos when search/filter queries occur */
    $.getJSON('/repos', (response) => {this.setState({ currentStarredRepos: response, allStarredRepos: response })})
  },
  handleStar: function(id) {
    var updatedRepos = this.state.currentStarredRepos.map((repo) => {
      if (repo.id === id) {
        if (repo.star_level !== 3) {
          var level = repo.star_level + 1;

          repo.star_level += 1;

          $.ajax({
            url: "/repos",
            type: "post",
            data: {repo_id: id, star_level: level},
            success: function(response) {
              console.log(response)
            },
            error: function(xhr) {
              console.log(xhr)
            }
          });
        } else {
          var level = 1;
          repo.star_level = level;

          $.ajax({
            url: "/repos",
            type: "post",
            data: {repo_id: id, star_level: level},
            success: function(response) {
              console.log(response)
            },
            error: function(xhr) {
              console.log(xhr)
            }
          });
        }
      }

      return repo;
    });

    this.setState({currentStarredRepos: updatedRepos});
  },
  handleRepo: function(repo_id, clone_url, readme_url) {
    this.setState({
      selectedRepoCloneUrl: clone_url,
      selectedRepoReadmeUrl: readme_url,
      selectedRepoId: repo_id,
      repoActivated: true
    });
  },
  handleAddTag: function(text) {
    var updatedRepos = this.state.currentStarredRepos.map((repo) => {
      if (repo.id === this.state.selectedRepoId) {
        var tagName = text;

        repo.tag = tagName;

        $.ajax({
          url: "/repos",
          type: "post",
          data: {repo_id: repo.id, tag: tagName},
          success: function(response) {
            console.log(response)
          },
          error: function(xhr) {
            console.log(xhr)
          }
        });
      }

      return repo;
    });

    this.setState({currentStarredRepos: updatedRepos});
  },
  setOneStar: function(one) {
    var updatedRepos = [];
    this.state.allStarredRepos.map((repo) => {
      if (repo.star_level === one) {
        updatedRepos.push(repo);
      }
    });

    this.setState({currentStarredRepos: updatedRepos});
  },
  setTwoStars: function(two) {
    var updatedRepos = [];
    this.state.allStarredRepos.map((repo) => {
      if (repo.star_level === two) {
        updatedRepos.push(repo);
      }
    });

    this.setState({currentStarredRepos: updatedRepos});
  },
  setThreeStars: function(three) {
    var updatedRepos = [];
    this.state.allStarredRepos.map((repo) => {
      if (repo.star_level === three) {
        updatedRepos.push(repo);
      }
    });

    this.setState({currentStarredRepos: updatedRepos});
  },
  resetStars: function() {
    var allRepos = this.state.allStarredRepos;
    this.setState({currentStarredRepos: allRepos});
  },
  handleOnClickTag: function(tag) {
    var updatedRepos = [];
    this.state.allStarredRepos.map((repo) => {
      if (repo.tag === tag) {
        updatedRepos.push(repo);
      }
    });

    this.setState({currentStarredRepos: updatedRepos});
  },
  handleOnClickTagged: function() {
    var updatedRepos = [];
    this.state.allStarredRepos.map((repo) => {
      if (repo.tag !== null && repo.tag !== "") {
        updatedRepos.push(repo);
      }
    });

    this.setState({currentStarredRepos: updatedRepos});
  },
  handleOnClickUntagged: function() {
    var updatedRepos = [];
    this.state.allStarredRepos.map((repo) => {
      if (repo.tag === null) {
        updatedRepos.push(repo);
      } else if (repo.tag === "") {
        updatedRepos.push(repo);
      }
    });

    this.setState({currentStarredRepos: updatedRepos});
  },
  handleSearch: function(searchText) {
    this.setState({
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    var allStarredRepos = this.state.allStarredRepos;
    var currentStarredRepos = this.state.currentStarredRepos;
    var selectedRepoCloneUrl = this.state.selectedRepoCloneUrl;
    var selectedRepoReadmeUrl = this.state.selectedRepoReadmeUrl;
    var repoActivated = this.state.repoActivated;
    var searchText = this.state.searchText;

    var filteredRepos = RepoAPI.filterRepos(currentStarredRepos, searchText);
    var userName = this.props.userName;
    var userAvatar = this.props.userAvatar;

    var showReadme = (active) => {
      if (active == true) {
        return <Readme selectedRepoClone={selectedRepoCloneUrl} selectedRepoReadme={selectedRepoReadmeUrl} onAddTag={this.handleAddTag}/>;
      }
    };

    return (
      <div className="dashboard">
        <div className="dashboard-control">
          <Nav userAvatar={userAvatar}/>
          <Tools userName={userName} onSetOneStar={this.setOneStar} onSetTwoStars={this.setTwoStars} onSetThreeStars={this.setThreeStars} onResetStars={this.resetStars}/>
        </div>
        <div className="dashboard-view">
          <div className="dashboard-view-container">
            <Sidebar repos={allStarredRepos} onClickTag={this.handleOnClickTag} onClickTagged={this.handleOnClickTagged} onClickUntagged={this.handleOnClickUntagged}/>
            <RepoList repos={filteredRepos} onStar={this.handleStar} onSelected={this.handleRepo} onSearch={this.handleSearch}/>
            {showReadme(repoActivated)}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;
