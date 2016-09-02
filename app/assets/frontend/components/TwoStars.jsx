var React = require('react');

var TwoStars = React.createClass ({
  render: function() {
    return (
      <div className="two-stars" id="star2" onClick={() => {this.props.onSetTwoStars(2);}}>
        <i className="fa fa-star" aria-hidden={true}></i>
        <i className="fa fa-star" aria-hidden={true}></i>
      </div>
    );
  }
});

module.exports = TwoStars;
