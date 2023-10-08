export const validateEmail = (email) => {
  email = email.trim();
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (email.length < 7 || email.length > 129) return 'Invalid length for email.';
  if (!emailRegex.test(email)) return 'Email format is invalid.';
  if (email.split('@').length > 2) return "Email must contain only one '@' symbol.";
  return '';
};

export const validateName = (name) => {
  if (name) return '';
};

export const validatePassword = (pass, email) => {
  pass = pass.trim();
  const passRegex = /^[a-zA-Z0-9!#$%.]*$/;
  if (pass.length < 8 || pass.length > 40) return 'Invalid length for password.';
  if (pass === email) return 'Email and password cannot be the same.';
  if (!(/[a-zA-Z]/.test(pass) && /[0-9]/.test(pass))) return 'Password must contain both numbers and letters.';
  if (!passRegex.test(pass)) return 'Invalid password format.';
  return '';
};

export const validateConfirmPassword = (confirmPass, password) => {
  confirmPass = confirmPass.trim();
  if (confirmPass !== password) return 'Passwords do not match.';
  return validatePassword(confirmPass);
};
