var React = require('react');
var TagList = require('TagList');

var Sidebar = React.createClass({
  render: function() {
    return (
      <div className="sidebar">
        <h4 className="sidebar-title">
          <i className="fa fa-tags" aria-hidden={true}></i>&nbsp;Tag Center
        </h4>
        <div className="sidebar-container">
          <div className="sidebar-container-filters">
            <div className="sidebar-container-filters-tagged" onClick={() => {this.props.onClickTagged();}}>
              Tagged
            </div>
            <div className="sidebar-container-filters-untagged" onClick={() => {this.props.onClickUntagged();}}>
              Untagged
            </div>
          </div>
          <TagList repos={this.props.repos} onClickTag={this.props.onClickTag}/>
        </div>
      </div>
    );
  }
});

module.exports = Sidebar;
