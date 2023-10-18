export const checkToken = () => {
  const tokenLocal = localStorage.getItem('jwt');
  // console.log('_makeRequest=>', token);
  if (tokenLocal) {
    console.log("checkToken => localStorage.getItem('jwt')", tokenLocal);
    return tokenLocal;
  }
  const tokenSession = sessionStorage.getItem('jwt');
  if (tokenSession) {
    console.log("checkToken => sessionStorage.getItem('jwt')", tokenSession);
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
