import { expecter } from 'ts-snippet';

describe('Self Dispatching Actions', () => {
  const expectSnippet = expecter(
    (code: string) => `
        import {
          createSelfDispatchingAction,
          _addUserName
        } from './src/self-dispatching-actions';
    
        ${code}
      `,
    {
      strict: true
    }
  );

  it('should compile', () => {
    expectSnippet(`
        const addUserName = createSelfDispatchingAction(
          '[Users] Add user name',
          _addUserName
        );
      `).toSucceed();
  });

  it('should detect case reducers with payload', () => {
    expectSnippet(`
        const addUserName = createSelfDispatchingAction(
          '[Users] Add user name',
          _addUserName
        );
      `).toInfer(
      'addUserName',
      '((payload: string) => void) & { caseReducer: (state: State, payload: string) => State; }'
    );
  });
});
