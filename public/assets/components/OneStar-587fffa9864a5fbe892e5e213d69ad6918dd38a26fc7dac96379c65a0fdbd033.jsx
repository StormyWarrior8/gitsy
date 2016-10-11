var React = require('react');

var OneStar = React.createClass ({
  render: function() {
    return (
      <div className="OneStar" id="star1" onClick={() => {this.props.onSetOneStar(1);}}>
        <i className="fa fa-star" aria-hidden={true}></i>
      </div>
    );
  }
});

module.exports = OneStar;
