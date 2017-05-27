import {combineReducers} from 'redux';
import TwilioReducer from './twilio_reducer.js';

const RootReducer = combineReducers({
  twilio: TwilioReducer
});

export default RootReducer;
