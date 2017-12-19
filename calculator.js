// JavaScript Document

var m = "";

// store memory
function store_m() {
	m = document.getElementById("d").value;
}

// Change Display

function d(val) {
	"use strict";
	document.getElementById("d").value = val;
}

// Type numbers and operators

function v(val) {
	document.getElementById("d").value += val;
}

//Evaluate the equation

function e( ) {
	try {
		d(eval(document.getElementById("d").value));
	}
	catch(err) {
		d("Error");
	}
}