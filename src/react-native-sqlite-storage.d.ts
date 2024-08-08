declare module 'react-native-sqlite-storage' {
    export type Transaction = any;
    export type ResultSet = any;
    export type SQLError = any;
    export interface SQLiteDatabase {
      transaction(
        callback: (tx: Transaction) => void,
        errorCallback?: (error: SQLError) => void,
        successCallback?: () => void
      ): void;
      // Add other database methods you use here
    }
  
    export function openDatabase(
      params: {
        name: string,
        location: 'default' | 'Library' | 'Documents',
      },
      successCallback?: () => void,
      errorCallback?: (error: SQLError) => void
    ): SQLiteDatabase;
  }
  