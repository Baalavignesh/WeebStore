import { useEffect } from "react";
import "./Popup.css";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
import "react-phone-input-2/lib/style.css";

import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase";
import { setLogged } from "../../../Actions/actionIsLogged";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebaseConfig from "../../../Services/firebase";
import { popupSignInClose } from "../../../Actions/actionPopupStates";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

function Popup(props) {
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
    forceSameDevice: false,
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  const popupSignIn = useSelector((state) => state.popupSignIn);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hi");

    firebase.auth().onAuthStateChanged((user) => {
      console.log("auth state changed");
      console.log(user);
      dispatch(setLogged(user));
      dispatch(popupSignInClose());
    });

    
  }, []);

  return (
    <div className="main-popup">
      <Dialog
        open={popupSignIn}
        onClose={props.handleMethod}
        aria-labelledby="form-dialog-title"
        className="popup_window"
        fullWidth={true}
        maxWidth={"xs"}
      >
        <DialogTitle id="form-dialog-title" className="form-dialog-title">
          Sign-In
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="popup-text">
            Sign-In to place orders and receive exiting news and offers from
            weeb store
          </DialogContentText>

          <DialogContentText className="popup-text-or">
            <span className="line-center"></span>
          </DialogContentText>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleMethod} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Popup;

{
  /* <div className="signin-input">
            {" "}
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              className="signin-input"
              fullWidth
            />
          </div>

          <div className="signin-input">
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
            />
          </div>

          <div className="sign-up-button">
            <Button color="primary" variant="contained">
              Sign-In
            </Button>
          </div>
          <DialogContentText className="popup-text-or">
            <span className="line-center">or</span>
          </DialogContentText> */
}
