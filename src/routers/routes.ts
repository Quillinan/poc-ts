import filmController from "../controllers/film.controller";
import { validateSchema } from "../middleware/validateSchema";
import filmSchema from "../schemas/film.schema";
import { Router } from "express";

const router = Router();

router.get("/", filmController.retrieveFilms);
router.post("/", validateSchema(filmSchema), filmController.createFilm);
router.put("/", validateSchema(filmSchema), filmController.updateFilm);
router.delete("/:id", filmController.deleteFilm);

export default router;
