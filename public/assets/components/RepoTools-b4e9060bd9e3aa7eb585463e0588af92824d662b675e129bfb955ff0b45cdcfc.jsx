var React = require('react');
var RepoSearch = require('RepoSearch');
var Stars = require('Stars');
var LangSelector = require('LangSelector');

var RepoTools = React.createClass({
  render: function() {
    return (
      <div className="RepoTools">
        <span className="RepoTools-theTitle">Repos</span>
        <div className="RepoTools-theSearchBoxes">
          <RepoSearch onSearch={this.props.onSearch} />
          <LangSelector langs={this.props.langs} selectedLang={this.props.selectedLang}
          handleLanguage={this.props.handleLanguage} />
        </div>
        <div className="RepoTools-theTagsAndStars">
          <Stars onSetOneStar={this.props.onSetOneStar} onSetTwoStars={this.props.onSetTwoStars}
          onSetThreeStars={this.props.onSetThreeStars} />
          {/* tagged/untagged */}
          <div className="RepoTools-taggedUntagged">
            <div className="RepoTools-taggedUntagged--tagged" id="tagged" onClick={() => {this.props.onClickTagged();}}>
              <span>Tagged</span>
            </div>
            <div className="RepoTools-taggedUntagged--untagged" id="untagged" onClick={() => {this.props.onClickUntagged();}}>
              <span>Untagged</span>
            </div>
          </div>
        </div>
        {/* clear filters */}
        <div className="RepoTools-clear">
          <div className="RepoTools-clear-btn" onClick={() => {this.props.clearFilters();}}>
            <span>Clear Filters</span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = RepoTools;
