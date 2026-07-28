import router from "./modules/embarcacoes/routes/embarcacoes.route.js"
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());
// registrando rotas do módulo de tarefas
app.use("/embarcacoes",router);
app.use("/admin",routerAdmin);

const porta = process.env.PORTA;

app.get("/", (req, res) => {
  try {
    res
      .status(200)
      .json({
        mensagem: "Bem-vindo à API de Tarefas!",
        status: "OK",
        date: new Date().toLocaleString("pt-BR", {
          timeZone: "America/Recife",
        }),
      });
  } catch (error) {
    res.status(500).json({ mensagem: "Erro ao iniciar a API." });
  }
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});