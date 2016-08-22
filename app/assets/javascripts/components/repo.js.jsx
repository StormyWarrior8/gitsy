var Repo = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },
  render: function() {
    var name = this.props.name;

    return (
      <div>
        <p>{name}</p>
      </div>
    );
  }
});
