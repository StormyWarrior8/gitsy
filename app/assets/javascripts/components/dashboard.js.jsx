var Dashboard = React.createClass({
  getInitialState: function() {
    return {
      currentStarredRepos: [],
      selectedRepoCloneUrl: '',
      selectedRepoReadmeUrl: '',
      repoActivated: false
    }
  },
  componentDidMount: function () {
    $.getJSON('/repos', (response) => {this.setState({ currentStarredRepos: response })})
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
  handleRepo: function(clone_url, readme_url) {
    this.setState({
      selectedRepoCloneUrl: clone_url,
      selectedRepoReadmeUrl: readme_url,
      repoActivated: true
    });
  },
  render: function() {
    var currentStarredRepos = this.state.currentStarredRepos;
    var selectedRepoCloneUrl = this.state.selectedRepoCloneUrl;
    var selectedRepoReadmeUrl = this.state.selectedRepoReadmeUrl;
    var repoActivated = this.state.repoActivated;

    var showReadme = (active) => {
      if (active == true) {
        return <Readme selectedRepoClone={selectedRepoCloneUrl} selectedRepoReadme={selectedRepoReadmeUrl}/>;
      }
    };

    return (
      <div className="ui two columns grid">
        <RepoList repos={currentStarredRepos} onStar={this.handleStar} onSelected={this.handleRepo}/>
        {showReadme(repoActivated)}
      </div>
    );
  }
});
