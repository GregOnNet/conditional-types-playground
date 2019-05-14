type OmitMethod<T> = T extends (...args) => unknown ? never : T;
type OmitMethods<T> = { [K in keyof T]: OmitMethod<T[K]> };

export function create<T extends new (...args) => InstanceType<T>>(
  token: T,
  defaults: Exclude<InstanceType<T>, (...args) => unknown>
): InstanceType<T> {
  const instance = new token();

  return Object.assign(instance, defaults);
}

class Meetup {
  participants: string[];

  addOne(name: string): void {
    this.participants = [...this.participants, name];
  }
}

const meetup = create(Meetup, { participants: [] });
