var RepoList = React.createClass({
  render: function() {
    var repos = this.props.repos;

    var renderRepos = () => {
      return repos.map((repo) => {
        return (
          <Repo key={repo.id} {...repo} />
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
