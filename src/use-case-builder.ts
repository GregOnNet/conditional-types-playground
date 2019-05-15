type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T];

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T];

type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

export function create<T extends new (...args: unknown[]) => InstanceType<T>>(
  token: T,
  defaults?: Partial<NonFunctionProperties<InstanceType<T>>>,
  mocks?: Partial<FunctionProperties<InstanceType<T>>>
): InstanceType<T> {
  const instance = new token();

  return Object.assign(instance, defaults, mocks);
}

class Meetup {
  participants: string[] = [];

  addOne(name: string): void {
    this.participants = [...this.participants, name];
  }
}

const meetup = create(Meetup);
