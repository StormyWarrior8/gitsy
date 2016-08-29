var React = require('react');
var AddTag = require('AddTag');

var Readme = React.createClass({
  renderReadme: function(readme_url) {
    axios.get(readme_url)
      .then(function(response) {
        var data = response.data;

        {/*
          console.log(marked(data));
        */}

        $('.readme-md').html(marked(data));
      })
      .catch(function(error) {
        {/* try with readme.md instead of README.md */}
        var readme_url_2 = readme_url.replace('README', 'readme');

        axios.get(readme_url_2)
          .then(function(response) {
            var data = response.data;

            $('.readme-md').html(marked(data));
          })
          .catch(function (error) {
            {/* try with Readme.md instead of readme.md */}
            var readme_url_3 = readme_url.replace('README', 'Readme');

            axios.get(readme_url_3)
              .then(function(response) {
                var data = response.data;

                $('.readme-md').html(marked(data));
              })
              .catch(function(error) {
                {/* throw an error: readme not found! */}
                console.log('Readme not found: ' + error);
              })
          })
      });
  },
  render: function() {
    var selectedRepoId = this.props.selectedRepoId;
    var selectedRepoClone = this.props.selectedRepoClone;
    var selectedRepoReadme = this.props.selectedRepoReadme;

    return (
      <div className="readme">
        {(this.renderReadme(selectedRepoReadme))}
        <div className="readme-sticky">
          <AddTag onAddTag={this.props.onAddTag}/>
          <b>Clone:</b> {selectedRepoClone}
        </div>
        <div className="readme-md"></div>
      </div>
    );
  }
});

module.exports = Readme;
