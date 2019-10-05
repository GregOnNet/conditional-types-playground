export function upperCase(text: any): any {
  if (typeof text === 'string') {
    return text.toUpperCase();
  }

  return null;
}

// Usage
const a = upperCase('').toLocaleLowerCase();
const b = upperCase(null);
const c = upperCase(null as string | null);
