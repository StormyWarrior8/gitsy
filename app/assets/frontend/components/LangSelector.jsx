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
      <div className="LanguageSelector">
        <i className="fa fa-bullseye" ariaHidden={true}></i>
        <div className="LanguageSelector-select">
          <Select
            name="lang-selection"
            placeholder="Select language"
            value={this.props.selectedLang}
            options={opts}
            onChange={this.setLanguage}
          />
        </div>
      </div>
    );
  }
});

module.exports = LangSelector;
