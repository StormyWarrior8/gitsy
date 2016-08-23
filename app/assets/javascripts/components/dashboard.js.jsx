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
          repo.star_level += 1;
        } else {
          repo.star_level = 1;
        }
      }

      return repo;
    });

    this.setState({currentStarredRepos: updatedRepos});
  },
  render: function() {
    var currentStarredRepos = this.state.currentStarredRepos;

    return (
      <div>
        <RepoList repos={currentStarredRepos} onStar={this.handleStar}/>
      </div>
    );
  }
});
