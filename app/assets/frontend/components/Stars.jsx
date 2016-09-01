var React = require('react');
var OneStar = require('OneStar');
var TwoStars = require('TwoStars');
var ThreeStars = require('ThreeStars');

var Stars = React.createClass({
  render: function() {
    return (
      <div className="Stars">
        <OneStar onSetOneStar={this.props.onSetOneStar}/>
        <TwoStars onSetTwoStars={this.props.onSetTwoStars}/>
        <ThreeStars onSetThreeStars={this.props.onSetThreeStars}/>
      </div>
    );
  }
});

module.exports = Stars;
