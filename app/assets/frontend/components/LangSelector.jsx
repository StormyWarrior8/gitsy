var React = require('react');
var Select = require('react-select');

var LangSelector = React.createClass({
  setLanguage: function(val) {
    if (val === null) {
      this.props.handleLanguage('');
    } else {
      this.props.handleLanguage(val.value);
    }
  },
  render: function() {
    var langs = this.props.langs;

    var opts = [];

    langs.forEach((lang) => {
      var obj = { value: lang, label: lang };
      opts.push(obj);
    });

    return (
      <Select
        name="lang-selection"
        value={this.props.selectedLang}
        options={opts}
        onChange={this.setLanguage}
      />
    );
  }
});

module.exports = LangSelector;
