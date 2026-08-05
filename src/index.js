import express from "express";
import dotenv from "dotenv";
import router from "./modules/embarcacoes/routes/embarcacoes.route.js";
import routerAdmin from "./modules/administrador/routes/administrador.router.js";
import criarTabela from "./config/create_table.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/embarcacoes", router);
app.use("/admin", routerAdmin);

const porta = process.env.PORTA || 3000;

app.get("/", (req, res) => {
  res.status(200).json({
    mensagem: "Bem-vindo à API de Embarcações!",
    status: "OK",
    versao: "1.0.0",
    autor: "Ádson Pablo Moreira Barbosa",
    email: "braiashow@gmail.com",
    data: new Date().toLocaleDateString("pt-BR", { toLocaleString: "America/Recife" })
  });
});

app.listen(porta, () => {
  criarTabela();
  console.log(`Servidor rodando na porta ${porta}`);
});