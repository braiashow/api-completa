import { Router } from "express";
import AdministradorController from "../controllers/administrador.controller.js";

const routerAdmin = Router();

routerAdmin.post("/cadastrar", AdministradorController.cadastrar);
routerAdmin.post("/login", AdministradorController.login);
/**
 * Rota privada
 *
 * A execucao acontece da esquerda para a direita:
 * 1. o middleware valida o JWT;
 * 2. se estiver valido, chama proximo();
 * 3. o controller devolve o perfil do administrador autenticado.
 */
routerAdmin.get(
    "/perfil",
    AutenticacaoMiddleware.autenticar,
    AdministradorController.perfil
);

export default routerAdmin;
