import React, { Component } from 'react'


var __html = require('../birthday-counter-master/index.html');
var template = { __html: __html };

React.module.exports = React.createClass({
  render: function() {
    return(
      <div dangerouslySetInnerHTML={template} />
    );
  }
});