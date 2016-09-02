var React = require('react');

var ThreeStars = React.createClass ({
  render: function() {
    return (
      <div className="three-stars" id="star3" onClick={() => {this.props.onSetThreeStars(3);}}>
        <i className="fa fa-star" aria-hidden={true}></i>
        <i className="fa fa-star" aria-hidden={true}></i>
        <i className="fa fa-star" aria-hidden={true}></i>
      </div>
    );
  }
});

module.exports = ThreeStars;
