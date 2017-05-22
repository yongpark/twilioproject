import React from 'react';
import ReactDOM from 'react-dom';
import Twilio from './twilio';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Twilio/>, root);
});
