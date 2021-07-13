## React-Browserify-Reactify
# It's a simple react project using browserify and reactify.
# Browserify is used in order to be able to use 'require' and 'export' for importing and exporting modules.
# Reactify is used in order for browserify to understand Jsx (using html tags inside javascript codes).
# We bundle modules as a dependencies tree in a bundle.js file using this line in terminal or cmd: browserify -t reactify index.js -o bundle.js
# index.js is our entry point (where we start importing a module) and bundle.js is our output file for having all required modules bundled.
