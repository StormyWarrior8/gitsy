var React = require('react');
var TagList = require('TagList');

var Sidebar = React.createClass({
  render: function() {
    return (
      <div className="Sidebar">
        <h4 className="Sidebar-title">
          <i className="fa fa-tags" aria-hidden={true}></i>&nbsp;Tag Center
        </h4>
        <div className="Sidebar-container">
          <TagList repos={this.props.repos} onClickTag={this.props.onClickTag}/>
        </div>
      </div>
    );
  }
});

module.exports = Sidebar;
