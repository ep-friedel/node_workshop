import { PoolConnection, escape } from "mysql";
import { executeQuery, getConnection } from ".";

export async function insertWeather(weather: Core.weatherData[]) {
  const query = `
        INSERT INTO weather (
            time,
            value,
            color,
            text
        ) VALUES (
            ${weather
              .map(
                event => `
                ${escape(event.time)},
                ${escape(event.value)},
                ${escape(event.color)},
                ${escape(event.text)}
                `
              )
              .join("), (")}
        )
        ON DUPLICATE KEY
        UPDATE
            value = value,
            color = color,
            text = text;`;

  const connection = await getConnection();

  await executeQuery(connection, query);

  await connection.release();

  return;
}

export async function deleteWeather() {
  const query = `TRUNCATE weather;`;

  const connection = await getConnection();

  await executeQuery(connection, query);

  await connection.release();

  return;
}
