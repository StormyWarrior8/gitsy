var Dashboard = React.createClass({
  getInitialState: function() {
    return {
      currentStarredRepos: []
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
  render: function() {
    var currentStarredRepos = this.state.currentStarredRepos;

    return (
      <div className="ui two columns grid">
        <RepoList repos={currentStarredRepos} onStar={this.handleStar}/>
        <Readme/>
      </div>
    );
  }
});
