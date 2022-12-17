// var React = require("react")
// var ReactDOM = require("react-dom")

import React from 'react';
import ReactDOM from 'react-dom';
import myname, {fn, fn2} from './my.js'; // importing variable from other file
import './index.css'; // path to css file
import def1 from './my.js';

import * as myf from './my.js'; // importing all function in a single variable

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
  <p>this is {myname} {fn()}</p>
  <p>this is default variable :- {def1}</p>
  <p>This is {myf.default} & {myf.fn()}</p>
</div>
, document.getElementById("root"))