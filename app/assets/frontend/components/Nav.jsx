var React = require('react');
var OneStar = require('OneStar');
var TwoStars = require('TwoStars');
var ThreeStars = require('ThreeStars');

var Nav = React.createClass ({
  render: function() {
    var userAvatar = this.props.userAvatar;

    return (
      <div className="nav">
        <div className="nav-top">
          <div className="nav-top__center">
            <h1 className="nav-top__center-title">gitoscope</h1>
          </div>

          <div className="nav-top__right">
            <div className="nav-top__right-avatar">
              <img src={userAvatar}/>
            </div>
          </div>
        </div>
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
