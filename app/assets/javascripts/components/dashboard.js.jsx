var Dashboard = React.createClass({
  getInitialState: function() {
    return {
      currentStarredRepos: []
    }
  },
  componentDidMount: function () {
    $.getJSON('/repos', (response) => {this.setState({ currentStarredRepos: response })})
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
