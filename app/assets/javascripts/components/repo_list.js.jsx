var RepoList = React.createClass({
  render: function() {
    var repos = this.props.repos;

    var renderRepos = () => {
      return repos.map((repo) => {
        return <Repo key={repo[0]} name={repo[1]} description={repo[2]} language={repo[3]} htmlUrl={repo[4]} cloneUrl={repo[5]} stargazersCount={repo[6]} forksCount={repo[7]} watchersCount={repo[8]}/>;
      });
    };

    return (
      <div className="ui segments">
        {renderRepos()}
      </div>
    );
  }
});
