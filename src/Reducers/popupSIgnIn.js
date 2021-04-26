const popupSignIn = (state = false, action) => {
  switch (action.type) {
    case "SIGNIN_OPEN":
      return true;
    case "SIGNIN_CLOSE":
      return false;
    default:
        return false;
  }
};

export default popupSignIn;
