module.exports = {
  filterLangs: function(allRepos) {
    var langs = [];

    allRepos.forEach(function(repo) {
      if (repo.lang !== null && repo.lang !== '') {
        langs.push(repo.lang);
      }
    });

    var filteredLangs = langs.filter(function(itm, i, langs) {
      return i==langs.indexOf(itm);
    });

    return filteredLangs;
  }
};
