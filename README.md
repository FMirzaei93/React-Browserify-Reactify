# React-Browserify-Reactify<br />
It's a simple react project using browserify and reactify.<br />
Browserify is used in order to be able to use 'require' and 'export' for importing and exporting modules.<br />
Reactify is used in order for browserify to understand Jsx (using html tags inside javascript codes).<br />
We bundle modules as a dependencies tree in a bundle.js file using this line in terminal or cmd: browserify -t reactify index.js -o bundle.js<br />
index.js is our entry point (where we start importing a module) and bundle.js is our output file for having all required modules bundled.<br />

# Note:
Before running the application, in the terminal or cmd navigate to the folder of the project and run: npm init (this line will make a node_module folder which embeds all the required dependencies that exist in package.json file)
