export const validateName = name => {
  return name.length >= 3 ? '' : 'Name must be at least 3 characters long.';
};

export const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? '' : 'Please enter a valid email address.';
};

export const validatePassword = password => {
  return password.length >= 6
    ? ''
    : 'Password must be at least 6 characters long.';
};
