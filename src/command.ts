interface CommandOption<T = any> {
  payload?: T;
}

type Command<T> = T extends { payload: infer TPayload }
  ? (payload: TPayload) => void
  : () => void;

// Factory
function createCommand<T extends CommandOption>(_option: T): Command<T> {
  return (() => {}) as any;
}

// Usage
const command = createCommand({ payload: 'Hi RuhrJS 👋' });
command('Nice to be here.');
