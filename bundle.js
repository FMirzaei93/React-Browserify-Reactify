(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var MyFooter = ()=>{

return(

React.createElement("footer", null, 
    React.createElement("p", null, "I am your footer:))")
)

)

}

module.exports = MyFooter


},{}],2:[function(require,module,exports){

var Nav = require('./Nav.js');
var MyInfo = require('./MyInfo.js');
var Footer = require('./Footer.js');


var Container = ()=>{
return(

React.createElement("div", null, 

    React.createElement(Nav, null), 
    React.createElement(MyInfo, null), 
    React.createElement(Footer, null)

)

)
}

module.exports = Container


//------------------------------------------------------------------------


// class MyApp extends React.Component {

//   render() {
//     return (<div>

//         <Nav />
//         <MyInfo />
//         <Footer />
    
//     </div>)
//   }
// }


},{"./Footer.js":1,"./MyInfo.js":3,"./Nav.js":4}],3:[function(require,module,exports){

var MyInfo= ()=>{

const a = "Hello,";
const b = "This is my Info:"

return(

        React.createElement("div", null, 

            React.createElement("p", null, a + b), 

            React.createElement("ul", null, 

             React.createElement("li", null, "Name: Firoozeh"), 
             React.createElement("li", null, "Age: 28"), 
             React.createElement("li", null, "Profession: Developer")
 
       )
       
)

)
}

module.exports = MyInfo


},{}],4:[function(require,module,exports){

var MyNav= ()=>{

return(

    React.createElement("nav", {className: "my-nav"}, 

        React.createElement("ul", null, 

            React.createElement("li", null, "Products"), 
            React.createElement("li", null, "Contact"), 
            React.createElement("li", null, "About")
        )

    )

)

}

module.exports = MyNav


},{}],5:[function(require,module,exports){

var Container = require('./components/MyContainer.js');

ReactDOM.render(React.createElement(Container, null), document.getElementById('mydiv'));


},{"./components/MyContainer.js":2}]},{},[5]);
