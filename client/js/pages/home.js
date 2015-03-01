var PageView = require('./base')
var templates = require('../templates')

module.exports = PageView.extend({
  pageTitle: 'Home',
  template: templates.pages.home
})
