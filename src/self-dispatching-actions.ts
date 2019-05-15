import {
  Action,
  CaseReducer,
  SelfDispatchingAction,
  State
} from './helper-types';

// addUserName('@GregOnNet')
export function _addUserName(state: State, payload: string): State {
  return {
    ...state,
    userNames: [...state.userNames, payload]
  };
}

// removeAllUserNames()
export function _removeAllUserNames(state: State): State {
  return {
    ...state,
    userNames: []
  };
}

export const store = { dispatch: (_action: Action<unknown>) => {} };

export function createSelfDispatchingAction<T extends CaseReducer<any, any>>(
  type: string,
  caseReducer: T
): SelfDispatchingAction<T> & { caseReducer: T } {
  const dispatchingAction = (payload: unknown) => {
    if (payload) {
      store.dispatch({ type, payload });
    } else {
      store.dispatch({ type });
    }
  };

  dispatchingAction.caseReducer = caseReducer;

  return dispatchingAction as any;
}

// Usage
const addUserName = createSelfDispatchingAction(
  '[Users] Add user name',
  _addUserName
);

const removeAllUserNames = createSelfDispatchingAction(
  '[Users] Remove all user names',
  _removeAllUserNames
);
