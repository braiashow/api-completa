import express, { Router } from 'express';
import AdministradorController from '../controllers/administrador.controller.js';

const router = express.Router()

router.post("/cadastrar", AdministradorController.cadastrar)
router.post("/login", AdministradorController.login)
router.get("/perfi/:email", AdministradorController.perfil)

