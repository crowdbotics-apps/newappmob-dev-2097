import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth752Reducer from '../features/EmailAuth752/redux/reducers';
import EmailAuth751Reducer from '../features/EmailAuth751/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth752: EmailAuth752Reducer,
EmailAuth751: EmailAuth751Reducer,
EmailAuth: EmailAuthReducer,

});