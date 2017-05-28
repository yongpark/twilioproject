import * as CallAPIUtil from '../util/twilio_util.js';

export const RECEIVE_CALLS = 'RECEIVE_CALLS';
export const RECEIVE_CALL = 'RECEIVE_CALL';

const receiveCalls = calls => ({
  type: RECEIVE_CALLS,
  calls
});

const receiveCall = call => ({
  type: RECEIVE_CALL,
  call
});

export const fetchCalls = () => dispatch => (
  CallAPIUtil.fetchCalls().then(calls =>
    dispatch(receiveCalls(calls))
  )
);

export const createCall = call => dispatch => (
  CallAPIUtil.createCall(call).then(newCall =>
    dispatch(receiveCall(call))
  )
);
