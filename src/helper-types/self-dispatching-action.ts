import { PlainCaseReducer } from './plain-case-reducer';
import { LoadedCaseReducer } from './loaded-case-reducer';

export declare type SelfDispatchingAction<T> = T extends PlainCaseReducer<
  infer TState
>
  ? () => void
  : T extends LoadedCaseReducer<infer _TState, infer TPayload>
  ? (payload: TPayload) => void
  : never;
