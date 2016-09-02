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
          {/* stars scope */}
          <div className="Toolbar-stars">
            <Stars onSetOneStar={this.props.onSetOneStar} onSetTwoStars={this.props.onSetTwoStars} onSetThreeStars={this.props.onSetThreeStars}/>
          </div>
          {/* tagged/untagged */}
          <div className="Toolbar-taggedUntagged">
            <div className="Toolbar-tagged" id="tagged" onClick={() => {this.props.onClickTagged();}}>
              <span>Tagged</span>
            </div>
            <div className="Toolbar-untagged" id="untagged" onClick={() => {this.props.onClickUntagged();}}>
              <span>Untagged</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Tools;
