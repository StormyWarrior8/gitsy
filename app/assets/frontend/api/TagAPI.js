module.exports = {
  filterTags: function(allRepos) {
    var tags = [];

    allRepos.forEach(function(repo) {
      if (repo.tag !== null && repo.tag !== '') {
        tags.push(repo.tag);
      }
    });

    var filteredTags = tags.filter(function(itm, i, tags) {
      return i==tags.indexOf(itm);
    });

    return filteredTags;
  }
};
