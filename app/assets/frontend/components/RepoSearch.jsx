var React = require('react');

var RepoSearch = React.createClass({
  handleSearch: function() {
    var searchText = this.refs.searchText.value;

    this.props.onSearch(searchText);
  },
  render: function() {
    return (
      <div className="repo-search">
        <input type="text" ref="searchText" placeholder="Search with your gitoscope" onChange={this.handleSearch}/>
      </div>
    );
  }
});

module.exports = RepoSearch;
