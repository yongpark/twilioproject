# Twilio Alarm Clock

[Twilio Alarm Clock][twilio] is a simple web application that allows users to send themselves a wake up call with a customized message through a simple web interface. The Twilio Alarm Clock's is a flat design using Material UI colors with hover effects signifying areas where user input is possible. The application takes the user's input, saves it to the database, then retrieves it when the call is being made.

Twilio Alarm Clock is a Yong Park's side project to learn Node.js and Express.js.

![Twilio Alarm Design][alarm]

## Features

- User inputted phone number, message, and date for customized wake up calls in the morning.
- Saves user inputted data to NoSQL database and retrieves at the time of call.
- Uses Twilio API to automate calling.
- Utilizes TwiMl Bins to support customized call messages.

## Project Design

Twilio Alarm Clock was built in a few days.

## Technology

Twilio Alarm Clock is a single-page application built on Node.js and React.js with dependencies on the frontend and backend including Twilio, moment.js, and Mongoose.

# Backend Technology
Grocero runs on Node.js and is hosted on Heroku. The purpose of the backend is to provide a server to interact with the Twilio using RESTFUL APIs.

## Database
MLab's NoSQL Database is used for Heroku.

## Dependencies

Notable dependencies include:

- Moment.js for parsing and standardizing time and dates.
- Twilio for customized messages and automated calling.

# Frontend Technology
Twilio Alarm Clock uses the React.js framework and the Redux architecture to manage data flow through the frontend.

## npm

Use NPM to install all the frontend dependencies.

A install script is configured so that webpack bundles all the front end files after deploying to Heroku.

## Webpack

Webpack bundles all frontend components. The bundled file is in `/dist`.


## React & Redux

All React components, Redux thunk action creators, API utilities, dispatchers, and stores are located in the [app](./app) directory.

## jQuery

jQuery is used to make the AJAX requests with the Node.js server.

# Future Implementations

## Account Creation
- Add ability for users to sign up and create accounts.

## User Dashboard
- Users will be able to view/edit their alarms set and create/delete alarms.

## Mobile
- Make the site more mobile friendly.

[twilio]: twilioalarm.herokuapp.com
[alarm]: ./docs/images/alarm.png "Grocero Home page"
