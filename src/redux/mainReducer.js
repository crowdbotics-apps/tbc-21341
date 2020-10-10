import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard12137249Reducer from '../features/Dashboard12137249/redux/reducers'
import SignUp11137223Reducer from '../features/SignUp11137223/redux/reducers'
import Dashboard13137219Reducer from '../features/Dashboard13137219/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard12137249: Dashboard12137249Reducer,
SignUp11137223: SignUp11137223Reducer,
Dashboard13137219: Dashboard13137219Reducer,

});