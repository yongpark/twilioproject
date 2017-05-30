import React from 'react';
import ReactDOM from 'react-dom';
import TwilioContainer from './twilio_container.js';
import Twilio from './twilio.jsx';
import configureStore from '../store/store.js';

document.addEventListener("DOMContentLoaded", () => {
	let store = {};
	store = configureStore();
	window.store = store;
	const root = document.getElementById("root");
	ReactDOM.render(<TwilioContainer store={store}/>, root);
});
