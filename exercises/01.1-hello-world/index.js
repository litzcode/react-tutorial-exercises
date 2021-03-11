import React from "react"; //Main React.js library

import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// WHAT: This variable returns contains the html to render
// WHAT --> a HTML element
let output = (
	<span>
		James is <strong>12</strong> years old
	</span>
);

// WHERE: A DOM element that will contain the entire react generated html
// WHERE --> a element in the DOM
const myDiv = document.querySelector("#myDiv");

//what   //where
ReactDOM.render(output, myDiv);
