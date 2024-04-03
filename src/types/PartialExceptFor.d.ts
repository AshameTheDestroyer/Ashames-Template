type PartialExceptFor<T, TRequiredKeys extends keyof T> =
    Partial<T> & Pick<T, TRequiredKeys>;