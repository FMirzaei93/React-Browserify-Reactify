
var Nav = require('./Nav.js');
var MyInfo = require('./MyInfo.js');
var Footer = require('./Footer.js');


var Container = ()=>{
return(

<div>

    <Nav />
    <MyInfo />
    <Footer />

</div>

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

