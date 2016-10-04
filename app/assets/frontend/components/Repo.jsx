var React = require('react');

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
    var readmeUrl = this.props.readmeUrl;
    var tag = this.props.tag;

    var renderTag = () => {
      if (tag !== '' && tag !== undefined && tag !== null) {
        return (
          <div className="Repo-tag">
            <i className="fa fa-tag" ariaHidden={true}></i>
            <span>{tag}</span>
          </div>
        );
      }
    };

    return (
      <div className="Repo" onClick={() => {this.props.onSelected(id, cloneUrl, readmeUrl);}}>
        <span  className="pinkStar" onClick={() => {this.props.onStar(id);}}><i className="fa fa-star" aria-hidden={true}></i></span>
        &nbsp;
        <span>{starLevel}</span>
        &nbsp;
        &nbsp;
        <span><b>{name}</b></span>
        <br/>
        <p className="Repo-description">{description}</p>
        <span className="Repo-details"><i className="fa fa-star" aria-hidden={true}></i> {stargazersCount} &nbsp;&nbsp; <i className="fa fa-code-fork" aria-hidden={true}></i> {forksCount} &nbsp;&nbsp; <i className="fa fa-eye" aria-hidden={true}></i> {watchersCount} &nbsp;&nbsp;
          <a href={htmlUrl} target="_blank">View on Github</a>
        </span>
        <br/>
        {renderTag()}
      </div>
    );
  }
});

module.exports = Repo;
