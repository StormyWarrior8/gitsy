var React = require('react');

var RepoSearch = React.createClass({
  handleSearch: function() {
    var searchText = this.refs.searchText.value;

    this.props.onSearch(searchText);
  },
  render: function() {
    return (
      <div className="RepoSearch">
        <i className="fa fa-search" ariaHidden={true}></i>
        <input type="text" ref="searchText" placeholder="Search by name" onChange={this.handleSearch}/>
      </div>
    );
  }
});

module.exports = RepoSearch;
