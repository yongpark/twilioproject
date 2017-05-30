import $ from 'jquery';

export const fetchCalls = () => (
  $.ajax({
    type: 'GET',
    url: `api/calls`
  })
);


export const createCall = call => (
  $.ajax({
    type: 'POST',
    url: `api/calls`,
    data: {phoneNumber: call.phoneNumber, message: call.message, date: call.date}
  })
);

export const makeCall = call => (
  $.ajax({
    type:'GET',
    url: `api/calls/${call.phoneNumber}/${call.message}`
  })
);
