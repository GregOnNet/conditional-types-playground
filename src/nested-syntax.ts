module A {
  declare type numberOrString<T> = T extends number
    ? number
    : T extends string
    ? string
    : any;

  type stringType = numberOrString<string>;
  type numberType = numberOrString<number>;
  type unionType = numberOrString<number | string>;
  type invalidType = numberOrString<undefined>;
}
