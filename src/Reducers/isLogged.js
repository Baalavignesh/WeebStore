const loggedReducer = (state = false, action) => {
    switch(action.type) {
        case 'SIGN_IN':
            return !!action.user;
        default:
            return state;
    }
}

export default loggedReducer;