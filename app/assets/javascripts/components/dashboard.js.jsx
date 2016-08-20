var Dashboard = React.createClass({
  propTypes: {
    starredReposUrl: React.PropTypes.string
  },
  getInitialState: function() {
    return {
      currentStarredRepos: [
        {
          id: 1,
          name: 'PokemonGo'
        },
        {
          id: 2,
          name: 'Axios'
        },
        {
          id: 3,
          name: 'React'
        }
      ]
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
