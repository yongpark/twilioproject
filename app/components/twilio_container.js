import {connect} from 'react-redux';
import {createCall, fetchCalls} from '..//actions/twilio_actions';
import Twilio from './twilio.jsx';
import {makeCall} from '../util/twilio_util.js';

const mapStateToProps = (state, ownProps) => ({
  call: {phoneNumber: '+1',
  message: '',
  date: new Date()
  }
});


const mapDispatchToProps = dispatch => ({
  createCall: call => dispatch(createCall(call)),
  fetchCalls: () => dispatch(fetchCalls()),
  makeCall: call => makeCall(call)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twilio);
