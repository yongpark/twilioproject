import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Twilio from './twilio';

document.addEventListener("DOMContentLoaded", () => {
	// let store = {};
	// store = configureStore();
	// window.store = store;
	const root = document.getElementById("root");
	ReactDOM.render(<Twilio/>, root);
});
