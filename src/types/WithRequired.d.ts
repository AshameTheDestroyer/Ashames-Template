type WithRequired<T, Keys extends keyof T> = T & { [Key in Keys]-?: T[Key]; };