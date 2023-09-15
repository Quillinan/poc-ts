import Joi from "joi";

const filmSchema = Joi.object({
  id: Joi.number().integer().min(1),
  name: Joi.string().required(),
  platform: Joi.string().required(),
  genre: Joi.string().required(),
  status: Joi.string().valid("Assistido", "Não assistido").required(),
  note: Joi.number().min(0).max(10),
  summary: Joi.string(),
});

export default filmSchema;
