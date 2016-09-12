var React = require('react');
var uuid = require('node-uuid');

var LangSelector = React.createClass({
  render: function() {
    var langs = this.props.langs;

    var renderOpts = () => {
      return langs.map((lang) => {
        return <option key={uuid()} value={lang}>{lang}</option>;
      });
    };

    return (
      <select>
        <option selected>Select Language</option>
        {renderOpts()}
      </select>
    );
  }
});

module.exports = LangSelector;
