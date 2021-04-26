import LoggedReducer from './isLogged';
import PopupSignInReducer from './popupSIgnIn';
import PopupSignOutReducer from './popupSignOut';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    logged: LoggedReducer,
    popupSignIn: PopupSignInReducer,
    popupSignOut: PopupSignOutReducer,

})

export default allReducers;