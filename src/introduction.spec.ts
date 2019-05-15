import { expecter } from 'ts-snippet';

describe('upperCase', () => {
  const expectSnippet = expecter(
    code => `
    import { upperCase } from './src/introduction';

    ${code}
  `,
    {
      strict: true
    }
  );

  it('should compile', () => {
    expectSnippet(
      `
      let maybe: string | null = null as any;
      const result = upperCase(maybe);
      `
    ).toSucceed();
  });

  it('should support union type', () => {
    expectSnippet(
      `
      let maybe: string | null = null as any;
      const result = upperCase(maybe);
      `
    ).toInfer('result', 'string|null');
  });
});
