exports.BAD_REQUEST = {
  status: false,
  message: 'You may be missing information in your request. Please check your request URL and METHOD, and try again.'
};

exports.NO_DATA_PROVIDED = {
  status: false,
  message: 'Error: No data provided.',
};

exports.SERVER_STARTED = port => `Server's doing a barrel-roll on http://localhost:${port}`;