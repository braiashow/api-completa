import express from "express";
import dotenv from "dotenv";
import router from "./modules/embarcacoes/routes/embarcacoes.route.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/embarcacoes", router);

const porta = process.env.PORTA || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    mensagem: "Bem-vindo à API de Embarcações!",
    status: "OK",
  });
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});