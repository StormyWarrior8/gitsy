module.exports = {
  filterRepos: function(allRepos, currentRepos, globalSearchTxt, searchText) {

    var filteredRepos = [];
    var txt = '';

    if (globalSearchTxt === '') {
      var filteredRepos = currentRepos;
      var txt = searchText;
    } else  {
      var filteredRepos = allRepos;
      var txt = globalSearchTxt;
    }

    // Filter repos by search
    filteredRepos = filteredRepos.filter((repo) => {
      var text = repo.repo_name.toLowerCase();

      return txt.length === 0 || text.indexOf(txt) > -1;
    });

    return filteredRepos;
  }
};
