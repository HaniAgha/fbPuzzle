// Hide news feed

var newsfeed = document.getElementById("stream_pagelet");
newsfeed.style.visibility = "hidden";

//add a div to introduce a puzzle
var puzzle= document.createElement("div");
puzzle.setAttribute("id", "Puzzle");

//the inner HTML of the puzzle div
puzzle.innerHTML ="<h1>Hi it's me</h1><button id=\"clickme\">Click me"+"</button>  ";
 //add puzzle to page
var parentContainer = document.getElementById("content_container");
parentContainer.insertBefore(puzzle, parentContainer.childNodes[0]);


// call the buutton 
document.getElementById("clickme").addEventListener("click", function () {
    alert("smart boy");
    
})

