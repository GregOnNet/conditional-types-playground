declare type numberOrString<T> = T extends number ? number : string;

type stringType = numberOrString<string>;
type numberType = numberOrString<number>;
type invalidType = numberOrString<null>;
