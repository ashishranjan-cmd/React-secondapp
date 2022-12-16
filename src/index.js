var React = require("react")
var ReactDOM = require("react-dom")

let fnm = "Tom";
let lnm = "Jerry";

let mydate = new Date();
let year = mydate.getFullYear();

let mys= { color : 'Red' } // attribute

ReactDOM.render(
<div>
  <h1>Welcome {fnm} & {lnm}</h1>
  <p style={mys}>Current year is : {year}</p>
</div>
, document.getElementById("root"))