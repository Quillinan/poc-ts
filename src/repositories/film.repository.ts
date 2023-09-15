import { Film } from "../protocols/film.protocol";
import db from "../database/database";
import { QueryResult } from "pg";

async function createFilm(film: Film): Promise<Film> {
  const { name, platform, genre, status, note, summary } = film;

  const query =
    "INSERT INTO films (name, platform, genre, status, note, summary) VALUES ($1, $2, $3, $4, $5, $6)";
  const values = [name, platform, genre, status, note, summary];

  try {
    await db.query(query, values);
    return film as Film;
  } catch (error) {
    throw new Error(`Erro ao criar filme: ${error.message}`);
  }
}

async function retrieveFilms(platform: string | null): Promise<Film[]> {
  let query = "SELECT * FROM films WHERE 1 = 1";

  if (platform) {
    query += ` AND platform = '${platform}'`;
  }

  try {
    const result: QueryResult = await db.query(query);
    return result.rows as Film[];
  } catch (error) {
    throw new Error(`Erro ao listar filmes: ${error.message}`);
  }
}

async function updateFilm(film: Film): Promise<Film> {
  const { id, name, platform, genre, status, note, summary } = film;
  const query = `
      UPDATE films
      SET name = $1, platform = $2, genre = $3, status = $4, note = $5, summary = $6
      WHERE id = $7
      RETURNING *;
    `;

  const values = [name, platform, genre, status, note, summary, id];

  try {
    await db.query(query, values);
    return film as Film;
  } catch (error) {
    throw new Error(`Erro ao atualizar filme: ${error.message}`);
  }
}

async function deleteFilm(id: number): Promise<void> {
  const query = `
        DELETE FROM films
        WHERE id = $1;
      `;

  const values = [id];

  try {
    await db.query(query, values);
  } catch (error) {
    throw new Error(`Erro ao excluir filme: ${error.message}`);
  }
}

const filmRepository = {
  createFilm,
  retrieveFilms,
  updateFilm,
  deleteFilm,
};

export default filmRepository;
