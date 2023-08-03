import { SyncedStorageFactory } from './helper/synced-storage-factory';

export type TodoType = {
  text: string;
};

export const {
  connector: todoConnector, //
  storage: todoStorage,
} = SyncedStorageFactory.createLocal<TodoType[]>('todo');
