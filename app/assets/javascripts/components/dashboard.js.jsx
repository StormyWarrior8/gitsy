var Dashboard = React.createClass({
  getInitialState: function() {
    return {
      currentStarredRepos: this.props.starredReposList
    };
  },
  render: function() {
    var currentStarredRepos = this.state.currentStarredRepos;
    return (
      <div>
        <RepoList repos={currentStarredRepos}/>
      </div>
    );
  }
});
