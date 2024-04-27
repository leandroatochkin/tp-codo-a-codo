import { homeDisplay } from "../components/homeDisplay.js";
import { navBar } from "../components/navBar.js";

const globalState = {
  loggedIn: false,
  userRole: ''
};

const navbarContainer = document.querySelector("#navbar-container");
const homeContainer = document.querySelector("#display-div");

export const setLoggedIn = (loggedIn, userRole) => {
  globalState.loggedIn = loggedIn;
  globalState.userRole = userRole;
  console.log(loggedIn, userRole);
  renderLoggedInComponents();
};

export const getLoggedIn = () => globalState.loggedIn;
export const getUserRole = () => globalState.userRole;

export const renderLoggedInComponents = () => {
  const { userRole, loggedIn } = globalState;


  if (loggedIn) {
    navbarContainer.innerHTML = '';
    homeContainer.innerHTML = '';
    navBar(loggedIn, userRole);
  } else {
    navBar();
  }
};