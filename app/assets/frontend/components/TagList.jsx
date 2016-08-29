var React = require('react');
var Tag = require('Tag');

var TagList = React.createClass({
  render: function() {
    var repos = this.props.repos;

    var renderTags = () => {
      return repos.map((repo) => {
        if (repo.tag !== null && repo.tag !== "") {
          return <Tag key={repo.id} tag={repo.tag} onClickTag={this.props.onClickTag} />;
        }
      });
    };

    return (
      <div className="tag-list">
        {renderTags()}
      </div>
    );
  }
});

module.exports = TagList;
