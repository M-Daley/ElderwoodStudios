import { createStore } from "redux";
import { commissionApp } from "./reducers";
import * as action from './actions';

const store = createStore(commissionApp);
// console.log(store.getState());

// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// store.dispatch(action.changeToWaist())
// store.dispatch(action.changeToProfile())
// store.dispatch(action.changeToFullbody())

// store.dispatch(action.addBackground())
// store.dispatch(action.removeBackground())
// store.dispatch(action.addColor())
// store.dispatch(action.removeColor())
// store.dispatch(action.addShading())
// store.dispatch(action.addColor())
// store.dispatch(action.removeShading())

// unsubscribe();

export default store;