import { MainPageState } from './state';
import { createStandardAction } from 'typesafe-actions';
import { combineReducers, Reducer, AnyAction } from 'redux';
import { Actions, changeName } from './actions';
import { withState } from '../../withState';

const initialState: MainPageState = {
  name: '===---==='
}

const nameReducer: Reducer<MainPageState> = (state = initialState, action) => {
  return { ...state, name: action.payload };
}

const fsa = {
  name: createStandardAction(Actions.CHANGE_NAME)<string>()
}

const name = withState(initialState).add(fsa.name, nameReducer);

export const rootReducer = combineReducers({
  name
})


