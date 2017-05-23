import {combineReducers} from 'redux';
import TwilioReducer from './twilio_reducer';
const RootReducer = combineReducers({
  twilio: TwilioReducer
});

export default RootReducer;
