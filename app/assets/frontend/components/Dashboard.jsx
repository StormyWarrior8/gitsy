var React = require('react');
var RepoList = require('RepoList');
var Readme = require('Readme');
var Nav = require('Nav');
var Sidebar = require('Sidebar');
var RepoAPI = require('RepoAPI');
var TagAPI = require('TagAPI');
var LangAPI = require('LangAPI');
var Tools = require('Tools');

var Dashboard = React.createClass({
  getInitialState: function() {
    return {
      allStarredRepos: [],
      currentStarredRepos: [],
      pastStarredRepos: [],
      selectedRepoCloneUrl: '',
      selectedRepoReadmeUrl: '',
      selectedRepoId: undefined,
      selectedLanguage: '',
      repoActivated: false,
      globalSearchText: '',
      searchText: '',
      filterStarOneActivated: false,
      filterStarTwoActivated: false,
      filterStarThreeActivated: false,
      filterTaggedActivated: false,
      filterUntaggedActivated: false,
      filterIsOn: false
    }
  },
  componentDidMount: function () {
    /* currentStarredRepos will be the ones showing up in the ui */
    /* while allStarredRepos will serve to just look up and update currentStarredRepos when search/filter queries occur */
    /* and... pastStarredRepos will be used only to store the past repos to let the local tag filter to search based on the filters of the Tools component */
    /* So pastStarredRepos will only be updated by the Tools component filters */
    $.getJSON('/repos', (response) => {this.setState({ currentStarredRepos: response, allStarredRepos: response, pastStarredRepos: response })})
  },
  /* handle repo star levels */
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
  /* show selected repo info */
  handleRepo: function(repo_id, clone_url, readme_url) {
    this.setState({
      selectedRepoCloneUrl: clone_url,
      selectedRepoReadmeUrl: readme_url,
      selectedRepoId: repo_id,
      repoActivated: true
    });
  },
  /* tagging functionality */
  handleAddTag: function(text) {
    var updatedRepos = this.state.allStarredRepos.map((repo) => {
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
  /* filter by one star repos */
  setOneStar: function(one) {
    $('#star3').removeClass('highlightStar');
    $('#star2').removeClass('highlightStar');
    $('#star1').addClass('highlightStar');

    this.setState({
      filterStarOneActivated: true,
      filterStarTwoActivated: false,
      filterStarThreeActivated: false,
      filterIsOn: true
    });

    /* add more filters */
    var untaggedFilter = this.state.filterUntaggedActivated;
    var taggedFilter = this.state.filterTaggedActivated;

    var updatedRepos = [];

    this.state.allStarredRepos.map((repo) => {
      if (taggedFilter === true && untaggedFilter === false) {
        if (repo.tag !== '' && repo.tag !== null) {
          if (repo.star_level === 1) {
            updatedRepos.push(repo);
          }
        }
      } else if (taggedFilter === false && untaggedFilter === true) {
        if (repo.tag === '' || repo.tag === null) {
          if (repo.star_level === 1) {
            updatedRepos.push(repo);
          }
        }
      } else {
        if (repo.star_level === 1) {
          updatedRepos.push(repo);
        }
      }
    });

    this.setState({currentStarredRepos: updatedRepos, pastStarredRepos: updatedRepos});
  },
  /* filter by two stars repos */
  setTwoStars: function(two) {
    $('#star1').removeClass('highlightStar');
    $('#star3').removeClass('highlightStar');
    $('#star2').addClass('highlightStar');

    this.setState({
      filterStarOneActivated: false,
      filterStarTwoActivated: true,
      filterStarThreeActivated: false,
      filterIsOn: true
    });

    /* add more filters */
    var untaggedFilter = this.state.filterUntaggedActivated;
    var taggedFilter = this.state.filterTaggedActivated;

    var updatedRepos = [];

    this.state.allStarredRepos.map((repo) => {
      if (taggedFilter === true && untaggedFilter === false) {
        if (repo.tag !== '' && repo.tag !== null) {
          if (repo.star_level === 2) {
            updatedRepos.push(repo);
          }
        }
      } else if (taggedFilter === false && untaggedFilter === true) {
        if (repo.tag === '' || repo.tag === null) {
          if (repo.star_level === 2) {
            updatedRepos.push(repo);
          }
        }
      } else {
        if (repo.star_level === 2) {
          updatedRepos.push(repo);
        }
      }
    });

    this.setState({currentStarredRepos: updatedRepos, pastStarredRepos: updatedRepos});
  },
  /* filter by three stars repos */
  setThreeStars: function(three) {
    $('#star1').removeClass('highlightStar');
    $('#star2').removeClass('highlightStar');
    $('#star3').addClass('highlightStar');

    this.setState({
      filterStarOneActivated: false,
      filterStarTwoActivated: false,
      filterStarThreeActivated: true,
      filterIsOn: true
    });

    /* add more filters */
    var untaggedFilter = this.state.filterUntaggedActivated;
    var taggedFilter = this.state.filterTaggedActivated;

    var updatedRepos = [];

    this.state.allStarredRepos.map((repo) => {
      if (taggedFilter === true && untaggedFilter === false) {
        if (repo.tag !== '' && repo.tag !== null) {
          if (repo.star_level === 3) {
            updatedRepos.push(repo);
          }
        }
      } else if (taggedFilter === false && untaggedFilter === true) {
        if (repo.tag === '' || repo.tag === null) {
          if (repo.star_level === 3) {
            updatedRepos.push(repo);
          }
        }
      } else {
        if (repo.star_level === 3) {
          updatedRepos.push(repo);
        }
      }
    });

    this.setState({currentStarredRepos: updatedRepos, pastStarredRepos: updatedRepos});
  },
  /* show repos tagged with a specific tag */
  handleOnClickTag: function(tag) {
    var updatedRepos = [];

    if (this.state.filterIsOn === false) {
      this.state.allStarredRepos.map((repo) => {
        if (repo.tag === tag) {
          updatedRepos.push(repo);
        }
      });
    } else {
      this.state.pastStarredRepos.map((repo) => {
        if (repo.tag === tag) {
          updatedRepos.push(repo);
        }
      });
    }

    this.setState({currentStarredRepos: updatedRepos});
  },
  /* filter by tagged repos */
  handleOnClickTagged: function() {
    $('#untagged').removeClass('highlightTagFilter');
    $('#tagged').addClass('highlightTagFilter');

    this.setState({filterUntaggedActivated: false, filterTaggedActivated: true, filterIsOn: true});

    /* add more filters */
    var oneStarActive = this.state.filterStarOneActivated;
    var twoStarsActive = this.state.filterStarTwoActivated;
    var threeStarsActive = this.state.filterStarThreeActivated;

    var updatedRepos = [];

    if (oneStarActive === true) {
      this.state.allStarredRepos.map((repo) => {
        if (repo.tag !== null && repo.tag !== "" && repo.star_level === 1) {
          updatedRepos.push(repo);
        }
      });
    } else if (twoStarsActive === true) {
      this.state.allStarredRepos.map((repo) => {
        if (repo.tag !== null && repo.tag !== "" && repo.star_level === 2) {
          updatedRepos.push(repo);
        }
      });
    } else if (threeStarsActive === true) {
      this.state.allStarredRepos.map((repo) => {
        if (repo.tag !== null && repo.tag !== "" && repo.star_level === 3) {
          updatedRepos.push(repo);
        }
      });
    } else {
      this.state.allStarredRepos.map((repo) => {
        if (repo.tag !== null && repo.tag !== "") {
          updatedRepos.push(repo);
        }
      });
    }

    this.setState({currentStarredRepos: updatedRepos, pastStarredRepos: updatedRepos});
  },
  /* filter by untagged repos */
  handleOnClickUntagged: function() {
    $('#tagged').removeClass('highlightTagFilter');
    $('#untagged').addClass('highlightTagFilter');

    this.setState({filterTaggedActivated: false, filterUntaggedActivated: true, filterIsOn: true});

    /* add more filters */
    var oneStarActive = this.state.filterStarOneActivated;
    var twoStarsActive = this.state.filterStarTwoActivated;
    var threeStarsActive = this.state.filterStarThreeActivated;

    var updatedRepos = [];

    if (oneStarActive === true) {
      this.state.allStarredRepos.map((repo) => {
        if (repo.tag === null && repo.star_level === 1) {
          updatedRepos.push(repo);
        } else if (repo.tag === "" && repo.star_level === 1) {
          updatedRepos.push(repo);
        }
      });
    } else if (twoStarsActive === true) {
      this.state.allStarredRepos.map((repo) => {
        if (repo.tag === null && repo.star_level === 2) {
          updatedRepos.push(repo);
        } else if (repo.tag === "" && repo.star_level === 2) {
          updatedRepos.push(repo);
        }
      });
    } else if (threeStarsActive === true) {
      this.state.allStarredRepos.map((repo) => {
        if (repo.tag === null && repo.star_level === 3) {
          updatedRepos.push(repo);
        } else if (repo.tag === "" && repo.star_level === 3) {
          updatedRepos.push(repo);
        }
      });
    } else {
      this.state.allStarredRepos.map((repo) => {
        if (repo.tag === null) {
          updatedRepos.push(repo);
        } else if (repo.tag === "") {
          updatedRepos.push(repo);
        }
      });
    }

    this.setState({currentStarredRepos: updatedRepos, pastStarredRepos: updatedRepos});
  },
  /* global search functionality */
  handleGlobalSearch: function(searchText) {
    this.setState({
      globalSearchText: searchText.toLowerCase()
    });
  },
  /* local search functionality */
  handleSearch: function(searchText) {
    this.setState({
      searchText: searchText.toLowerCase()
    });
  },
  /* clear all filters */
  handleClearFilters: function() {
    /* clean filter highlights */
    $('#star1, #star2, #star3').removeClass('highlightStar');
    $('#tagged, #untagged').removeClass('highlightTagFilter');

    /* reset filters state */
    this.setState({
      filterStarOneActivated: false,
      filterStarTwoActivated: false,
      filterStarThreeActivated: false,
      filterTaggedActivated: false,
      filterUntaggedActivated: false,
      filterIsOn: false,
      currentStarredRepos: this.state.allStarredRepos,
      selectedLanguage: ''
    });
  },
  /* filter by programming language */
  onHandleLanguage: function(newValue) {
    var updatedRepos = [];
    if (newValue !== '') {
      this.setState({selectedLanguage: newValue});
      if (this.state.filterIsOn === true) {
        this.state.pastStarredRepos.map((repo) => {
          if (repo.lang === newValue) {
            updatedRepos.push(repo);
          }
        });
        this.setState({currentStarredRepos: updatedRepos});
      } else {
        this.state.allStarredRepos.map((repo) => {
          if (repo.lang === newValue) {
            updatedRepos.push(repo);
          }
        });
        this.setState({currentStarredRepos: updatedRepos});
      }
    } else {
      this.setState({selectedLanguage: newValue, currentStarredRepos: this.state.allStarredRepos});
    }
  },
  render: function() {
    {/* state vars */}
    var allStarredRepos = this.state.allStarredRepos;
    var currentStarredRepos = this.state.currentStarredRepos;
    var selectedRepoCloneUrl = this.state.selectedRepoCloneUrl;
    var selectedRepoReadmeUrl = this.state.selectedRepoReadmeUrl;
    var selectedLanguage = this.state.selectedLanguage;
    var repoActivated = this.state.repoActivated;
    var searchText = this.state.searchText;
    var globalSearchText = this.state.globalSearchText;

    {/* props vars */}
    var userName = this.props.userName;
    var userAvatar = this.props.userAvatar;

    {/* repo api call */}
    var filteredRepos = RepoAPI.filterRepos(allStarredRepos, currentStarredRepos, globalSearchText, searchText);

    {/* tag api call */}
    var filteredTags = TagAPI.filterTags(allStarredRepos);

    {/* lang api call */}
    var filteredLanguages = LangAPI.filterLangs(allStarredRepos);

    {/* show readme */}
    var showReadme = (active) => {
      if (active == true) {
        return <Readme selectedRepoClone={selectedRepoCloneUrl} selectedRepoReadme={selectedRepoReadmeUrl} onAddTag={this.handleAddTag}/>;
      }
    };

    return (
      <div className="dashboard">
        <div className="dashboard-control">
          <Nav userAvatar={userAvatar} onSearch={this.handleGlobalSearch}/>
          <Tools userName={userName} langs={filteredLanguages} handleLanguage={this.onHandleLanguage} selectedLang={selectedLanguage}
          onSetOneStar={this.setOneStar} onSetTwoStars={this.setTwoStars} onSetThreeStars={this.setThreeStars}
          onClickTagged={this.handleOnClickTagged} onClickUntagged={this.handleOnClickUntagged}
          clearFilters={this.handleClearFilters}/>
        </div>
        <div className="dashboard-view">
          <div className="dashboard-view-container">
            <Sidebar repos={allStarredRepos} onClickTag={this.handleOnClickTag} tags={filteredTags}/>
            <RepoList repos={filteredRepos} onStar={this.handleStar} onSelected={this.handleRepo} onSearch={this.handleSearch}/>
            {showReadme(repoActivated)}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Dashboard;
