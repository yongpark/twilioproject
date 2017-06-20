import React from 'react';
import ReactDOM from 'react-dom';
import TwilioContainer from './twilio_container.js';
import Twilio from './twilio.jsx';
import configureStore from '../store/store.js';

var http = require("http");
setInterval(function() {
    http.get("http://grocero.herokuapp.com");
}, 300000); // every 5 minutes (300000)

document.addEventListener("DOMContentLoaded", () => {
	let store = {};
	store = configureStore();
	window.store = store;
	const root = document.getElementById("root");
	ReactDOM.render(<TwilioContainer store={store}/>, root);
});
