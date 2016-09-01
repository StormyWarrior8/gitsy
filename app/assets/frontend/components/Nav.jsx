var React = require('react');

var Nav = React.createClass ({
  render: function() {
    var userAvatar = this.props.userAvatar;

    return (
      <header className="AppHeader">
        <div className="AppHeader-container">
          <div className="AppHeader-left">
            <h1 className="AppHeader-logo">Gitoscope</h1>
          </div>
          <div className="AppHeader-right">
            <div className="AppHeader-rightContainer">
              <label className="AppHeader-user" htmlFor="app-header-dropdown">
                <i className="fa fa-search" aria-hidden={true}></i>
                <input className="AppHeader-globalSearch" type="text" placeholder="Your Gitoscope"/>
                <span className="AppHeader-avatar">
                  <img src={userAvatar}/>
                </span>
              </label>
              <input type="checkbox" id="app-header-dropdown" name="app-header-dropdown" className="AppMenuDrop-check"/>
              <ul className="AppMenuDrop">
                <li className="AppMenuDrop-item">
                  <a href="#">
                    <i className="fa fa-cog" aria-hidden={true}></i>
                    &nbsp;
                    Settings
                  </a>
                </li>
                <li className="AppMenuDrop-item">
                  <a href="#">
                    <i className="fa fa-medium" aria-hidden={true}></i>
                    &nbsp;
                    The Story
                  </a>
                </li>
                <li className="AppMenuDrop-item">
                  <a href="#">
                    <i className="fa fa-hand-peace-o" aria-hidden={true}></i>
                    &nbsp;
                    Contact
                  </a>
                </li>
                <li className="AppMenuDrop-item">
                  <a href="#">
                    <i className="fa fa-heart" aria-hidden={true}></i>
                    &nbsp;
                    Feedback
                  </a>
                </li>
                <li className="AppMenuDrop-item">
                  <a href="#">
                    <i className="fa fa-power-off" aria-hidden={true}></i>
                    &nbsp;
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
});

module.exports = Nav;
