type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type SubPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
// 하나만 싹 지워주는구나

export function cls(...classnames: (string | undefined)[]) {
  return classnames.join(" ");
}
