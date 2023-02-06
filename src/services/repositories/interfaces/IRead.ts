export interface IRead<T> {
  findOne(id: string): Promise<T>;
  getAll(): Promise<T[]>;
}
