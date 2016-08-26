var AddTag = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();

    var tag = this.refs.tag.value;

    if (tag) {
      this.refs.tag.value = '';
      this.props.onAddTag(tag);
    } else {
      this.refs.tag.focus();
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="ui right labeled left icon input">
          <i className="tags icon"></i>
          <input type="text" ref="tag" placeholder="Enter tag"/>
          <button className="ui tag label" type="submit"> Add Tag </button>
        </div>
      </form>
    );
  }
});
