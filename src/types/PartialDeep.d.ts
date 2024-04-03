type PartialDeep = {
    [Key in keyof T]?: T[Key] extends object ? PartialDeep<T[Key]> : T[Key];
};