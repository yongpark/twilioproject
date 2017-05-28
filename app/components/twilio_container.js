import {connect} from 'react-redux';
import {createCall, fetchCalls} from '..//actions/twilio_actions';
import Twilio from './twilio.jsx';

const mapStateToProps = (state, ownProps) => ({
  call: {phoneNumber: '',
  message: '',
  date: null,
  time: null,}
});


const mapDispatchToProps = dispatch => ({
  createCall: call => dispatch(createCall(call)),
  fetchCalls: () => dispatch(fetchCalls())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twilio);
