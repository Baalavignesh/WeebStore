const popupSignOut = (state = false, action) => {
  switch (action.type) {
    case "SIGNOUT_OPEN":
      return true;
    case "SIGNOUT_CLOSE":
      return false;
    default:
      return false;
  }
};

export default popupSignOut;
