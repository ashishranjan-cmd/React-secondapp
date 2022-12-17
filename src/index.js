var React = require("react")
var ReactDOM = require("react-dom")

// import './index.css'; // path to css file

import myname from './my.js'; // importing variable from other file

let fnm = "Tom";
let lnm = "Jerry";

let mydate = new Date();
let year = mydate.getFullYear();

let mys= { color : 'Red' } // attribute

let mypic = "https://picsum.photos/200";


ReactDOM.render(
<div>
  <h1>Welcome {fnm} & {lnm}</h1>
  <p className='myc'> Testing the web</p>
  <p style={mys}>Current year is : {year}</p>
  <img src={ mypic + "?grayscale" } />
  <p>this is {myname} </p>
</div>
, document.getElementById("root"))