var React = require('react');

var AddTag = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var tag = this.refs.tag.value;

    if (tag && tag.length <= 13) {
      this.refs.tag.value = '';
      this.props.onAddTag(tag);
    } else {
      this.refs.tag.focus();
    }
  },
  render: function() {
    return (
      <div className="AddTag">
        <i className="fa fa-tag" ariaHidden={true}></i>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="tag" placeholder="Enter tag"/>
          <button type="submit">Add</button>
        </form>
        <div className="AddTag-clone">
          <span><b>Clone:</b></span>
          <input type="text" ref="input" onFocus={() => {this.refs.input.select();}}
          value={this.props.repoClone} readOnly />
        </div>
      </div>
    );
  }
});

module.exports = AddTag;
