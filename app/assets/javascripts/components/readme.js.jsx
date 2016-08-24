var Readme = React.createClass({
  renderRepoName: function(repo) {
    var name = "";

    repo.map((r) => {
      name = r.name;
    });

    return name;
  },
  renderRepoClone(repo) {
    var clone = "";

    repo.map((r) => {
      clone = r.cloneUrl;
    });

    return clone;
  },
  renderRepoReadme(repo) {
    var readme = "";

    repo.map((r) => {
      readme = r.readme;
    });

    return readme;
  },
  render: function() {
    var repo = this.props.repo;

    return (
      <div className="ten wide column">
        <div className="ui piled very padded text container segment">
          <h1>{this.renderRepoName(repo)}</h1>
          <p>{this.renderRepoClone(repo)}</p>
          <h3>{this.renderRepoReadme(repo)}</h3>
        </div>
      </div>
    );
  }
});
