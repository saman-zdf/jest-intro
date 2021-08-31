function repeatMessage(message, repeatCount) {
  if (typeof message != 'string') {
    throw 'the input is invalid';
  }
  // if (typeof repeatCount != 'number') {
  // if (isNaN(repeatCount)) {
  //   throw 'the input is anvalid';
  // }

  let messageToShow = '';
  for (let index = 0; index < repeatCount; index++) {
    messageToShow += message;
  }
  return messageToShow;
}

console.log(repeatMessage('saman'));

module.exports = {
  repeatMessage,
};
