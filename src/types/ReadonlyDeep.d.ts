type ReadonlyDeep<T> = {
    readonly [Key in keyof T]: T[Key] extends object ? ReadonlyDeep<T[Key]> : T[Key];
};