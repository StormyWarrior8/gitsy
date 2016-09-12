var React = require('react');
var Stars = require('Stars');
var LangSelector = require('LangSelector');

var Tools = React.createClass({
  render: function() {
    var userName = this.props.userName;
    var langs = this.props.langs;

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
          {/* languages */}
          <div className="Toolbar-langs">
            <LangSelector langs={langs} selectedLang={this.props.selectedLang} handleLanguage={this.props.handleLanguage}/>
          </div>
          {/* clear filters */}
          <div className="Toolbar-clear">
            <div className="Toolbar-clearBtn" onClick={() => {this.props.clearFilters();}}>
              <span>Clear</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Tools;
