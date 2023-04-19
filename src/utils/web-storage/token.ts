import { SyncedStorageFactory } from './helper/synced-storage-factory';

export type TokenType = {
  access: string;
  refresh: string;
};

export const {
  connector: tokenConnector, //
  storage: tokenStorage,
} = SyncedStorageFactory.createLocal<TokenType>('token');
