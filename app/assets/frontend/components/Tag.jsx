var React = require('react');

var Tag = React.createClass({
  render: function() {
    var tag = this.props.tag;

    return (
      <div className="tag" onClick={() => {this.props.onClickTag(tag);}}>
        <div className="tag-container">
          <i className="fa fa-tag" aria-hidden={true}></i>&nbsp;{tag}
        </div>
      </div>
    );
  }
});

module.exports = Tag;
