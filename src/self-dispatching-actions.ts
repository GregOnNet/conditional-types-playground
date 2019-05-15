export interface State {
  userNames: string[];
}

export interface Action<TPayload> {
  type: string;
  payload?: TPayload;
}

declare type CaseReducer<TState, TPayload> = (
  state: TState,
  payload?: TPayload
) => TState;

declare type PlainCaseReducer<TState> = (state: TState) => TState;
declare type LoadedCaseReducer<TState, TPayload> = (
  state: TState,
  payload: TPayload
) => TState;

declare type SelfDispatchingAction<T> = T extends PlainCaseReducer<infer TState>
  ? () => void
  : T extends LoadedCaseReducer<infer _TState, infer TPayload>
  ? (payload: TPayload) => void
  : never;

export const store = { dispatch: (_action: Action<unknown>) => {} };

export function addUserName(state: State, payload: string): State {
  return {
    ...state,
    userNames: [...state.userNames, payload]
  };
}

export function removeAll(state: State): State {
  return {
    ...state,
    userNames: []
  };
}

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

const addUser = createSelfDispatchingAction('Add User Name', addUserName);
const removeAllUsers = createSelfDispatchingAction(
  'Remove All User Names',
  removeAll
);
