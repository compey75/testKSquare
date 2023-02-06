import { IWrite } from '../interfaces/IWrite';
import { IRead } from '../interfaces/IRead';


export abstract class BaseRepository<T> implements  IRead<T> , IWrite<T> {

  create(item: T): Promise<T | null> {
    throw new Error('Method not implemented.');
  }

  update(id: string, item: T): Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  findOne(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
  getAll():Promise<T[]> {
    throw new Error('Method not implemented.');
  }
}