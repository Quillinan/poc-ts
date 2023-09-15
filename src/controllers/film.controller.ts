import filmService from "@/services/film.service";
import { Request, Response } from "express";

async function createFilm(req: Request, res: Response) {
  try {
    const film = await filmService.createFilm(req.body);
    res.status(201).json(film);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar filme" });
  }
}

async function retrieveFilms(req: Request, res: Response) {
  try {
    const platform = req.query.platform as string | undefined;

    if (platform !== undefined && typeof platform !== "string") {
      res
        .status(400)
        .json({ error: "Platform and genre must be strings or null" });
      return;
    }

    const films = await filmService.retrieveFilms(platform || null);
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar filmes" });
  }
}

async function updateFilm(req: Request, res: Response) {
  try {
    const film = await filmService.updateFilm(req.body);
    res.status(200).json(film);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar filme" });
  }
}

async function deleteFilm(req: Request, res: Response) {
  try {
    const { id } = req.params;
    await filmService.deleteFilm(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir filme" });
  }
}

const filmController = {
  createFilm,
  retrieveFilms,
  updateFilm,
  deleteFilm,
};

export default filmController;
