/* Exports an object that defines
 *  all of the configuration needed by the projects'
 *  depended-on grunt tasks.
 *
 * You can find the parent object in: node_modules/lineman/config/application.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('application', {

  // grunt tasks
  loadNpmTasks: [],

  removeTasks: {
    common: [
      "coffee", 
      "less", 
      //"jshint", 
      "handlebars", 
      "jst", 
      "concat", 
      "images:dev", 
      "webfonts:dev", 
      "homepage:dev" 
    ], dev: [
      "server",
      //"watch"
    ],
    dist: [
      "uglify", 
      "cssmin", 
      "images:dist", 
      "webfonts:dist", 
      "homepage:dist"
    ]
  },

  // task override configuration
  prependTasks: {
    common: [ ],
    dev: [ ],
    dist: [ ]
  },

  // concat: {
  //   js: {
  //     src: ["<banner:meta.banner>", "<%= files.js.vendor %>", "<%= files.coffee.generated %>", "<%= files.js.lib %>"],
  //     separator: ";"
  //   }
  // },

  watch: {
    js: {
      files: ["lib/**/*.js"],
      tasks: ["spec-ci"]
    }
  }

});
