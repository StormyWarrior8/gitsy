var RepoList = React.createClass({
  render: function() {
    var repos = this.props.repos;

    var renderRepos = () => {
      return repos.map((repo) => {
        return <Repo key={repo.id} id={repo.id} name={repo.repo_name} description={repo.desc} language={repo.lang} htmlUrl={repo.html_url} cloneUrl={repo.clone_url} readmeUrl={repo.readme_url} stargazersCount={repo.stars} forksCount={repo.forks} watchersCount={repo.watchers} starLevel={repo.star_level} tag={repo.tag} onStar={this.props.onStar} onSelected={this.props.onSelected}/>;
      });
    };

    return (
      <div className="six wide column">
        <div className="ui segments">
          {renderRepos()}
        </div>
      </div>
    );
  }
});
