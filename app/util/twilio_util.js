import $ from 'jquery';

export const fetchCalls = () => (
  $.ajax({
    type: 'GET',
    url: `api/calls`
  })
);


export const createCall = call => (
  $.ajax({
    type: "POST",
    url: `api/calls`,
    data: {call}
  })
);
