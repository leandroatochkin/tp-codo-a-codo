
let loggedIn = false;

export const setLoggedIn = (value) => {
  loggedIn = value;
};

export const isLoggedIn = () => {
  return loggedIn;
};