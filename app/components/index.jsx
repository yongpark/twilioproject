import React from 'react';
import ReactDOM from 'react-dom';
import Twilio from './twilio.jsx';
import configureStore from '../store/store.js';

document.addEventListener("DOMContentLoaded", () => {
	let store = {};
	store = configureStore();
	window.store = store;
	const root = document.getElementById("root");
	ReactDOM.render(<Twilio
		url='http://localhost:8080/api/calls' store={store}/>, root);
});
