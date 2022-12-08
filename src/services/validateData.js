export const validateEmail = (email) => {
  return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? true : false;
};

export const validatePassword = (password) => {
  // This Regex returns true only if you have lowercase, uppercase and a digit and the whole password must be longer than 6 characters
  return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/)
    ? true
    : false;
};
