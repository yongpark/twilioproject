import * as CallAPIUtil from '../util/twilio_util.js';

export const RECEIVE_CALLS = 'RECEIVE_CALLS';

const receiveCalls = calls => ({
  type: RECEIVE_CALLS,
  calls
});

export const fetchCalls = () => dispatch => (
  CallAPIUtil.fetchCalls().then(calls => dispatch(receiveCalls(calls))
  )
);
