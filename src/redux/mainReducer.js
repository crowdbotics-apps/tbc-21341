import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp11137223Reducer from '../features/SignUp11137223/redux/reducers'
import Dashboard13137219Reducer from '../features/Dashboard13137219/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp11137223: SignUp11137223Reducer,
Dashboard13137219: Dashboard13137219Reducer,

});