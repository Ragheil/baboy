import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  { name: 'testDB', location: 'default' },
  () => { console.log('Database opened'); },
  (error) => { console.error('Error opening database', error); }
);

export const createTable = () => {
  db.transaction((tx: SQLite.Transaction) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, fullname TEXT, email TEXT, password TEXT)',
      [],
      (tx: SQLite.Transaction, results: SQLite.ResultSet) => {
        console.log('Table created successfully');
      },
      (error: SQLite.SQLError) => {
        console.error('Error creating table', error);
      }
    );
  });
};
