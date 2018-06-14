import { PoolConfig, PoolConnection, createPool } from "mysql";

const config: PoolConfig = {
  host: "db4free.net",
  port: 3306,
  user: "epuser",
  password: "qwert1234",
  database: "eptest",
  charset: "utf8mb4"
};

const pool = createPool(config);

export function getConnection(): Promise<PoolConnection> {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) reject(err);
      resolve(connection);
    });
  });
}

export function executeQuery(
  connection: PoolConnection,
  query
): Promise<DB.Result[]> {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, result) => {
      if (err) {
        console.log(query);
        reject(err);
      }
      resolve(result);
    });
  });
}
