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
            <a href="#" id="user-avatar">
              <div className="nav-top__right-avatar">
                <img src={userAvatar}/>
              </div>
            </a>
            <ul className="nav-menu-dropdown">
              <li>
                <a href="#" id="nav-settings">
                  <i className="fa fa-cog" aria-hidden={true}></i>
                  &nbsp;
                </a>
              </li>
              <li>
                <a href="#" id="nav-story">
                  <i className="fa fa-medium" aria-hidden={true}></i>
                  &nbsp;
                </a>
              </li>
              <li>
                <a href="#" id="nav-contact">
                  <i className="fa fa-hand-peace-o" aria-hidden={true}></i>
                  &nbsp;
                </a>
              </li>
              <li>
                <a href="#" id="nav-feedback">
                  <i className="fa fa-heart" aria-hidden={true}></i>
                  &nbsp;
                </a>
              </li>
              <li>
                <a href="#" id="nav-signout">
                  <i className="fa fa-power-off" aria-hidden={true}></i>
                  &nbsp;
                </a>
              </li>
            </ul>
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
