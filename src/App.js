import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import reducer from "./reducer";
// Redux Provider
import {Provider} from 'react-redux';
// items

// redux stuff
  // redux store: resemblance with useReducer (and initialState)
    // 2 arguments：state & action
    // state as InitialState，action as change to InitialState/updatedState.
    // return state, at last.
import { createStore } from 'redux';


// store.getState()

const store = createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.dispatch({type: DECREASE});
// store.dispatch({type: INCREASE});
// console.log(store.getState());
// console.log(store)

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;