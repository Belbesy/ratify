## Setup

RequireJS is necessary for building the js files

    npm install requirejs

Bower for the dependencies

    npm install bower

Install the dependencies

    bower install

> Please note that we're using the AMD versions of both Backbone and Underscore to make the setup process as easy as possible.

When ready to build the project, run:

    build/build.sh

this will create a new `dist` directory, copy the files over, run the r.js optimizer on assets, and clean it the file structure a bit for production. Refer to `app.build.js`for configuration options.

### CSS Imports

If you're not using a preprocessor, feel free to modularize your stylesheets, and `@import` them into a master stylesheet. During the build process, r.js will merge these files together, so that you don't have to deal with any performance hits from using `@import`.
