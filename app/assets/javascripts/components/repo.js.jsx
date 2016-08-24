var Repo = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },
  render: function() {
    var id = this.props.id;
    var name = this.props.name;
    var description = this.props.description;
    var language = this.props.language;
    var htmlUrl = this.props.htmlUrl;
    var cloneUrl = this.props.cloneUrl;
    var stargazersCount = this.props.stargazersCount;
    var forksCount = this.props.forksCount;
    var watchersCount = this.props.watchersCount;
    var starLevel = this.props.starLevel;

    return (
      <div className="ui vertical padded segment repo" onClick={() => {this.props.onSelected(name, cloneUrl, "readme example");}}>
        <i onClick={() => {this.props.onStar(id);}}><i className="star icon"></i></i>
        <span>{starLevel}</span>
        &nbsp;
        &nbsp;
        <span><b>{name}</b></span>
        <br/>
        <br/>
        <p>{description}</p>
        <span><i className="fa fa-star" aria-hidden={true}></i> {stargazersCount} &nbsp;&nbsp; <i className="fa fa-code-fork" aria-hidden={true}></i> {forksCount} &nbsp;&nbsp; <i className="fa fa-eye" aria-hidden={true}></i> {watchersCount} &nbsp;&nbsp; <a href={htmlUrl} target="_blank">View on Github</a></span>
      </div>
    );
  }
});
