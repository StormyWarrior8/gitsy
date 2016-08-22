var RepoList = React.createClass({
  render: function() {
    var repos = this.props.repos;

    var renderRepos = () => {
      var anId = 0;
      return repos.map((repo) => {
        return (
          <Repo key={anId++} name={repo[2][1]} />
        );
      });
    };

    return (
      <div>
        {renderRepos()}
      </div>
    );
  }
});
