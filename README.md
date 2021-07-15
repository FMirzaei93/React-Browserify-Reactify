# React-Browserify-Reactify-Watchify<br />
It's a simple react project using browserify and reactify.<br />

Browserify is used in order for us to be able to use "require" and "export" for importing and exporting modules in javascript, since the browser normally do not understand the meaning  of "require".<br/><br/>


Reactify is used in order for browserify to understand Jsx codes (Jsx means using html tags inside javascript codes).<br/><br/>


We bundle modules as a dependencies tree in a bundle.js file(browsifying) and trasform Jsx files to js files(reactifying) by running this lines in terminal or cmd: <br/><br/>

`$npm run reactify`</br><br/>


This line will check the "scripts" section in package.json and run it.</br><br/>


In order for us not to run $npm run reactify every time that we change one of our modules, we can use "watchify". This command will chack any changes in our modules and apply them immidiately in bundle.js file. You can trigger it by running this line in terminal or cmd:<br/><br/>


`$npm run watchify`<br/>


*In the "scripts" section in package.json, index.js is our entry point (where we start importing a module) and bundle.js is our output file for having all required modules bundled.<br />

*You can use other transformers instead of reactify, e.g., "babelify"

# Note:
Before running the application, in terminal or cmd navigate to the folder of the project and run:<br/><br/>
`$npm install`<br/><br/>
This line will make a node_modules folder which embeds all the required dependencies that exist in package.json file)</br><br/>


*Recommendation: This is a great website to get to know more about browserify, transformer and watchify: https://spapas.github.io/2015/05/27/using-browserify-watchify/

