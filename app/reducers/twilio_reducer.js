import * as TwilioActions from '../actions/twilio_actions';
import {merge} from 'lodash';

const TwilioReducer = (state = {}, action) => {
  Object.freeze(state);
  let newCalls;
  let newState;
  switch(action.type){
    case TwilioActions.RECEIVE_CALLS:
      return merge({}, action.calls);
    default:
      return state;
  }
};

export default TwilioReducer;
