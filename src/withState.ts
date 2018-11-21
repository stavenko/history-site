import { isActionOf } from 'typesafe-actions';
import { Reducer as ReduxReducer } from 'redux';

type F = (...args: any[]) => any;

type Reducer<State, A> = (state: State, action: A) => State;

export interface TypesafeReducer<State> extends ReduxReducer<State> {
  add: Add<State>;
}

type Add<State> = <Fsa extends F>(
  fsa: Fsa,
  reducer: Reducer<State, ReturnType<Fsa>>
) => TypesafeReducer<State>;

export const withState = <State>(initialState: State) => {
  const reducerMap = new Map();

  /** Finds reducer for the action in the reducer map and runs reducer.
   * This is simple Reducer type that augmented with addReducer key for chaining.
   */
  const moduleReducer = ((state = initialState, action) => {
    for (const [fsa, reducer] of reducerMap) {
      if (isActionOf(fsa, action)) {
        return reducer(state, action);
      }
    }
    return state;
  }) as TypesafeReducer<State>;

  /** Puts reducer into reducer map */
  const add: Add<State> = (fsa, reducer) => {
    reducerMap.set(fsa, reducer);
    return moduleReducer;
  };

  moduleReducer.add = add;

  return moduleReducer;
};


