// STORE -> GLOBALIZE STORE

// ACTION INCREMENT
const actionisSignedIn = () => {
  return {
    type: 'TO SET SIGN IN'
  }
}

//REDUCER
let isSignedIn = false;
const reducerisSignIn = (state = isSignedIn, action) => {
  switch (action.type) {
    case 'TO SET SIGN IN':
      return !isSignedIn
  }
}

let store = createStore(reducerisSignIn);

//Display the store
store.subscribe(() => console.log(store.getState()));

//DISPATCH
store.dispatch(actionisSignedIn());
