import { Film } from "@/protocols/film.protocol";
import filmRepository from "@/repositories/film.repository";

async function createFilm(film: Film): Promise<Film> {
  return filmRepository.createFilm(film);
}

async function retrieveFilms(platform: string | null): Promise<Film[]> {
  return filmRepository.retrieveFilms(platform);
}

async function updateFilm(film: Film): Promise<Film> {
  return filmRepository.updateFilm(film);
}

async function deleteFilm(id: number): Promise<void> {
  return filmRepository.deleteFilm(id);
}

const filmService = {
  createFilm,
  retrieveFilms,
  updateFilm,
  deleteFilm,
};

export default filmService;
