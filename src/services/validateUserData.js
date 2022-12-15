export const validateEmail = (email) => {
  return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
};

export const validatePassword = (password) => {
  // This Regex returns true only if you have at least one lowercase, one uppercase and one digit and the whole password must be longer than 6 characters
  return password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/);
};
