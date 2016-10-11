var React = require('react');
var Tag = require('Tag');
var uuid = require('node-uuid');

var TagList = React.createClass({
  render: function() {
    var repos = this.props.repos;
    var tags = this.props.tags;

    var renderTags = () => {
      return tags.map((uniqueTag) => {
          return <Tag key={uuid()} tag={uniqueTag} onClickTag={this.props.onClickTag} />;
      });
    };

    return (
      <ul className="TagList">
        {renderTags()}
      </ul>
    );
  }
});

module.exports = TagList;
