import { Router } from "express";
import AdministradorController from "../controllers/administrador.controller.js";

const routerAdmin = Router();

routerAdmin.post("/cadastrar", AdministradorController.cadastrar);
routerAdmin.post("/login", AdministradorController.login);
routerAdmin.get("/perfil", AdministradorController.perfil);

export default routerAdmin;
