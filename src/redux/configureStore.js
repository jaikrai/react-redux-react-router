import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducer";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

export default function configureStore(initialState) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add suppport Redux dev tools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
