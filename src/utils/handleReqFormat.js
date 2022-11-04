const userIsValid = ({ firstName, lastName, gender }) =>
  firstName && lastName && gender;
module.exports = { userIsValid };
