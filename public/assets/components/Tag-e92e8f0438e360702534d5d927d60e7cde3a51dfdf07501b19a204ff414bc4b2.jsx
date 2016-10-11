var React = require('react');

var Tag = React.createClass({
  render: function() {
    var tag = this.props.tag;

    return (
      <li className="Tag" onClick={() => {this.props.onClickTag(tag);}}>
        {tag}
      </li>
    );
  }
});

module.exports = Tag;
