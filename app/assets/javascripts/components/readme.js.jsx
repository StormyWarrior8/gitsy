var Readme = React.createClass({
  render: function() {
    var repo = this.props.repo;

    var name = '';
    var clone = '';
    var readme = '';

    var assignRepoData = (repo) => {
      return repo.map((r) => {
        name = r.name;
        clone = r.cloneUrl;
        readme = r.readme;
      });
    };

    return (
      <div className="ten wide column">
        <div className="ui piled very padded text container segment">
          {assignRepoData(repo)}
          <h1>{name}</h1>
          <p>{clone}</p>
          <h3>{readme}</h3>
        </div>
      </div>
    );
  }
});
