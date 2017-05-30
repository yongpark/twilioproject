import React from 'react';
import ReactDOM from 'react-dom';
import TwilioContainer from './twilio_container.js';
import configureStore from '../store/store.js';


document.addEventListener("DOMContentLoaded", () => {
	let store = {};
	store = configureStore();
	window.store = store;
	const root = document.getElementById("root");
	ReactDOM.render(<TwilioContainer url='/' store={store}/>, root);
});
