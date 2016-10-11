var React = require('react');
var TagList = require('TagList');

var Sidebar = React.createClass({
  handleSearch: function() {
    var searchText = this.refs.tagSearch.value;

    this.props.onSearch(searchText);
  },
  logMeOut: function() {
    $.ajax({
      url: "/logout",
      type: "post",
      success: function(response) {
        console.log(response)
      },
      error: function(xhr) {
        console.log(xhr)
      }
    });
  },
  render: function() {
    return (
      <div className="Sidebar">
        <div className="Sidebar-containerOne">
          <div className="Sidebar-containerOne-logo">
            <h1>Gitsy</h1>
          </div>

          <div className="Sidebar-containerOne-settings">
            {/*
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            */}
          </div>

          <div className="Sidebar-containerOne-profile">
            <img src={this.props.userAvatar} alt="" />
            <div className="Sidebar-containerOne-profile-details">
              <span><b>Enrique Benitez</b></span>
              <span><b>Stars:</b>&nbsp;{this.props.starsCount}</span>
              {/* <span>Level 14</span> */}
              {/* <span><em>ProgressBar</em></span> */}
            </div>
          </div>

          <div className="Sidebar-containerOne-tagCenter">
            <div className="Sidebar-containerOne-tagCenter-container">
              <span className="Sidebar-containerOne-tagCenter-container-title">Tag Center</span>
              <div className="Sidebar-containerOne-tagCenter-container-search">
                <i className="fa fa-search" ariaHidden={true}></i>
                <input type="text" ref="tagSearch" placeholder="Search tag" onChange={this.handleTagSearch}/>
              </div>
            </div>
            <div className="Sidebar-containerOne-tagCenter-wrapper">
              <div className="Sidebar-containerOne-tagCenter-wrapper-tags">
                <TagList repos={this.props.repos} onClickTag={this.props.onClickTag} tags={this.props.tags}/>
              </div>
            </div>
          </div>
        </div>

        <div className="Sidebar-containerTwo">
          <div className="Sidebar-containerTwo-extras">
            <ul>
              {/* <li>The Gitsy Story</li> */}
              <a href="https://twitter.com/intent/tweet?text=Hi%20@bntzio%20@gitsyapp%20:" target="_blank"><li>Contact</li></a>
              <a href="https://twitter.com/intent/tweet?text=Hey%20@bntzio%20@gitsyapp%20I%20think..." target="_blank"><li>Feedback</li></a>
              <a href="https://twitter.com/intent/tweet?url=http://gitsy.co&text=@gitsyapp%20by%20@bntzio%20is%20the%20ultimate%20@GitHub%20organizer%20for%20stargazers%20-%20Check%20it%20out:&hashtags=GitHub,ProductHunt" target="_blank"><li>Spread Gitsy <i className="fa fa-heart" ariaHidden={true}></i></li></a>
              <a onClick={this.logMeOut} href="http://gitsy.co">Logout <i className="fa fa-sign-out" ariaHidden={true}></i></a>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Sidebar;
