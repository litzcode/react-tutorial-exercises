import React from "react";
import ReactDOM from "react-dom";

const animals = ["Horse", "Turtle", "Elephant", "Monkey"];

/**
 * change the content inside the map function
 **/
const animalsInHTML = animals.map((singleAnimal, i) => {
    return <li key={i}>{singleAnimal}</li>;
    //If you choose not to assign an explicit key to list items 
    //then React will default to using indexes as keys.
    //Index as a key is an anti-pattern
    //It may break your application and display wrong data!
});

ReactDOM.render(<ul>{animalsInHTML}</ul>, document.querySelector("#myDiv"));
