type Command<T> = T extends { payload: infer TPayload }
  ? (payload: TPayload) => void
  : () => void;

interface CommandOption<T = any> {
  payload: T;
}

function createCommand<T extends CommandOption>(_option: T): Command<T> {
  return (() => {}) as any;
}

const command = createCommand({ payload: 'string' });
command('0');
