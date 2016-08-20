var Repo = React.createClass({
  render: function() {
    var id = this.props.id;
    var name = this.props.name;

    return (
      <div>
        <p>{name}</p>
      </div>
    );
  }
});
