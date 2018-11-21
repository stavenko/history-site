import * as React from 'react';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { 
  createStore,
  applyMiddleware,
  DeepPartial,
  Store,
  Reducer,
  AnyAction
} from 'redux';

const DEBUG = true;

type ReactComponent<T, C> = React.ComponentClass<T, C>;
type ClassType<P, T extends React.Component<P, React.ComponentState>, C extends React.ComponentClass<P>> =
        C &
        (new (props: P, context?: any) => T) &
        (new (props: P, context?: any) => { props: P });

export function pageBuilder<
  P extends {}, 
  T extends React.Component<P, React.ComponentState>, 
  C extends React.ComponentClass<P>>
  (Page: ClassType<P, T, C>, reducers: Reducer)
  {
  return <Provider store={buildStore(reducers)} >
    {React.createElement(Page)}
  </Provider>
}

function buildStore<S>(
  reducers: Reducer,
  initialState: DeepPartial<S> = {}
): Store<S> {
  const middlewares = [thunk];

  /*
  if (DEBUG) {
    middlewares.push(
      createLogger({
        collapsed: true
      })
    );
  }
   */

  return createStore<S, AnyAction, void, void>(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
}


