export const checkToken = () => {
  const tokenLocal = localStorage.getItem('jwt');
  if (tokenLocal) {
    return tokenLocal;
  }
  const tokenSession = sessionStorage.getItem('jwt');
  if (tokenSession) {
    return tokenSession;
  }
};

export const setToken = (token, rememberMe) => {
  if (rememberMe) {
    localStorage.setItem('jwt', token);
  } else {
    sessionStorage.setItem('jwt', token);
  }
};
