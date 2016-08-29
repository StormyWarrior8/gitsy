var React = require('react');
var OneStar = require('OneStar');
var TwoStars = require('TwoStars');
var ThreeStars = require('ThreeStars');

var Nav = React.createClass ({
  render: function() {
    return (
      <div className="nav">
        <h1 className="nav-title">gitoscope</h1>
        <div className="nav-gitoscope-settings">
          <div className="nav-gitoscope-settings-firstPanel">
            <p>Star Scope | <a className="nav-gitoscope-settings-firstPanel-reset" onClick={() => {this.props.onResetStars();}}>Reset</a></p>
            <div className="nav-gitoscope-settings-firstPanel-components">
              <OneStar onSetOneStar={this.props.onSetOneStar}/>
              <TwoStars onSetTwoStars={this.props.onSetTwoStars}/>
              <ThreeStars onSetThreeStars={this.props.onSetThreeStars}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
