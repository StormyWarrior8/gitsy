var React = require('react');
var Stars = require('Stars');

var Tools = React.createClass({
  render: function() {
    var userName = this.props.userName;

    return (
      <div className="Toolbar">
        <div className="Toolbar-title">
          <p>{userName}'s Tools&nbsp;<i className="fa fa-space-shuttle" aria-hidden={true}></i></p>
        </div>
        <div className="Toolbar-tools">
          <div className="Toolbar-stars">
            <span>Star Scope</span>
            <Stars onSetOneStar={this.props.onSetOneStar} onSetTwoStars={this.props.onSetTwoStars} onSetThreeStars={this.props.onSetThreeStars}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Tools;
