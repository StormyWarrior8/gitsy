module.exports = {
  filterRepos: function(repos, searchText) {
    var filteredRepos = repos;

    // Filter by searchText
    filteredRepos = filteredRepos.filter((repo) => {
      var text = repo.repo_name.toLowerCase();

      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    return filteredRepos;
  }
};
