import express from "express";
import EmbarcacoesController from "../controllers/embarcacoes.controller.js";
import AutenticacaoMiddleware from '../../../middleware/autenticacao.middleware.js';
const router = express.Router();

router.get("/listar", AutenticacaoMiddleware.autenticar, EmbarcacoesController.listarTodos);

router.post("/cadastrar", AutenticacaoMiddleware.autenticar, EmbarcacoesController.cadastrar);

router.put("/atualizar/total", AutenticacaoMiddleware.autenticar, EmbarcacoesController.atualizarTotal);

router.patch("/atualizar/parcial/:numPat", AutenticacaoMiddleware.autenticar, EmbarcacoesController.atualizarParcial);

router.delete("/excluir/:numPat", AutenticacaoMiddleware.autenticar, EmbarcacoesController.excluirPorNumPat);

router.delete("/excluir/todos", AutenticacaoMiddleware.autenticar, EmbarcacoesController.excluirTodos);

export default router;
