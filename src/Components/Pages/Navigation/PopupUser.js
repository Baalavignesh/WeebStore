import "./Popup.css";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import "react-phone-input-2/lib/style.css";

import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase";
import firebaseConfig from "../../../Services/firebase";
import { popupSignOutClose } from "../../../Actions/actionPopupStates";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}



function PopupUser(props) {

  const popupSignOut = useSelector((state) => state.popupSignOut)
  const dispatch = useDispatch();


    const signOutUser = () => {
      console.log('signed out')
        firebase.auth().signOut();
        dispatch(popupSignOutClose());
        
    }

  return (
    <div className="main-popup">
      <Dialog
        open={popupSignOut}
        onClose={props.handleMethod}
        aria-labelledby="form-dialog-title"
        className="popup_window"
      >
        <DialogTitle id="form-dialog-title" className="form-dialog-title">
          {/* Welcome {firebase.auth().currentUser.displayName} */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="popup-text">
            Your Orders
          </DialogContentText>
          <div className="sign-up-button">
            <Button onClick = {() => signOutUser()} color="primary" variant="contained">
              Sign-Out
            </Button>
          </div>
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

export default PopupUser;
