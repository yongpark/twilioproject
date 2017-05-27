import React from 'react';
import ReactDOM from 'react-dom';
import Twilio from './twilio.jsx';

document.addEventListener("DOMContentLoaded", () => {
	// let store = {};
	// store = configureStore();
	// window.store = store;
	const root = document.getElementById("root");
	ReactDOM.render(<Twilio
		url='http://localhost:8080/api/calls'/>, root);
});
