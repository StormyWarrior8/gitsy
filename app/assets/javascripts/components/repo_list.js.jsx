var RepoList = React.createClass({
  render: function() {
    var repos = this.props.repos;

    var renderRepos = () => {
      return repos.map((repo) => {
        return <Repo key={repo[0][1]} name={repo[2][1]} description={repo[6][1]} language={repo[56][1]} htmlUrl={repo[5][1]} cloneUrl={repo[50][1]} stargazersCount={repo[54][1]} forksCount={repo[61][1]} watchersCount={repo[66][1]}/>;
      });
    };

    return (
      <div className="ui segments">
        {renderRepos()}
      </div>
    );
  }
});
