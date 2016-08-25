var Readme = React.createClass({
  renderReadme: function(readme_url) {
    axios.get(readme_url)
      .then(function (response) {
        var data = (response.data);

        {/*
          console.log(marked(data));
        */}

        $('.readme-md').html(marked(data));
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  render: function() {
    var selectedRepoClone = this.props.selectedRepoClone;
    var selectedRepoReadme = this.props.selectedRepoReadme;

    return (
      <div className="ten wide column">
        <div className="ui very padded text container segment readme">
          {(this.renderReadme(selectedRepoReadme))}
          <p>
            <b>Clone:</b> {selectedRepoClone}
          </p>
          <div className="readme-md"></div>
        </div>
      </div>
    );
  }
});
