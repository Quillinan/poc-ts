import express from "express";
import router from "./routers/routes";

const app = express();

app.use(express.json());

app.use("/film", router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
