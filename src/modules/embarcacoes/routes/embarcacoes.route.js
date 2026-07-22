import express from "express";
import EmbarcacoesController from "../controllers/embarcacoes.controller.js";

const router = express.Router();

router.get("/listar", EmbarcacoesController.listarTodos);

router.post("/cadastrar", EmbarcacoesController.cadastrar);

router.put("/atualizar/total", EmbarcacoesController.atualizarTotal);

router.patch("/atualizar/parcial/:numPat", EmbarcacoesController.atualizarParcial);

router.delete("/excluir/:numPat", EmbarcacoesController.excluirPorNumPat);

router.delete("/excluir/todos", EmbarcacoesController.excluirTodos);

export default router;
