# A Lineman template for writing/testing javascript/coffeescript libraries
** Supporting Lineman Version : 0.9.0 **

This provides the basic configuration needed to start writing your library with an automated workflow

# Instructions

1. git clone this repo
1. `npm install -g lineman` (if you don't already have lineman installed)
1. `npm install`
1. `lineman run`
  - tests will automatically runn

### Running tests in a browser, if necessary

1. `lineman spec`
1. open your web browser to localhost:8000

### Changing configuration

- edit config/application.js to change tasks and task configs
- edit config/files.js to add/remove files from groups
