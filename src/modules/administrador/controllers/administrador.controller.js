import bcrypt, { compareSync } from "bcrypt";

import jwt from "jsonwebtoken";

import AdministradorModel from "../models/administrador.model.js";

class AdministradorController {
  static async cadastrar(req, res) {
    try {
      const { id, nome, email, senha } = req.body;

      if (!id || !nome || !email || !senha) {
        return res.status(400).json({
          mensagem: "Todos os campos são obrigatórios",
        });
      }

      const totalAdmin = await AdministradorModel.contarAdmins();

      if (totalAdmin > 0) {
        return res.status(409).json({
          mensagem: "Esse administrador já existe",
        });
      }
      if (senha.length < 8) {
        return resposta.status(403).json({
          mensagem: "A senha de admin precisa ter no minimo 8 caracteres",
        });
      }
      const regex =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,32}$/;

      if (!regex.test(senha)) {
        return res.status(403).json({
          mensagem:
            "Senha invalida! Sua senha deve conter pelo menos: 1 letra maiúscula, 1 letra minúscula, 1 número, 1 caractere especial (ex: @, #, $, %)",
        });
      }
      const regexEmail =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
      if (!regexEmail.test(email)) {
        return res.status(403).json({
          mensagem: "Email invalido",
        });
      }
      const salt = bcrypt.genSaltSync(10);
      const hashSenha = bcrypt.hashSync(senha, salt);
      await AdministradorModel.cadastrar(
        id,
        nome,
        nome,
        (senha = hashSenha),
      );
      return res
        .status(201)
        .json({ mensagem: "Usuário cadastrado com sucesso" });

      // lógica para cadastrar o administrador
    } catch (error) {
      return res.status(500).json({
        mensagem: "Erro interno do servidor",
        erro: error.message,
      });
    }
  }
  static async login(req, res) {
    try {
      const token = jwt.sign(
  {
    id: administrador.id,
    nome: adminstrador.nome,
    email: administrador.email,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: process.env.JWT_TEMPO_EXPIRADO
  }
);
      const { email, senha } = req.body;
      if (!email || !senha) {
        return res
          .status(403)
          .json({ mensagem: "Forneça o email e senha para login" });
      }
      const administrador = await AdministradorModel.buscarPorEmail(email);
      if (administrador.length === 0) {
        return res.status(402).json({ mensagem: "usuário não encontrado" });
      }
      if (administrador.ativo === false) {
        return res.status(403).json({ mensagem: "usuário inativo!" });
      }
      const verificarSenha = await bcrypt.compareSync(
        senha,
        administrador.senha,
      );
      if (!verificarSenha) {
        return res.status(403).json({ mensagem: "email ou senha incorreta!" });
      }
    } catch (error) {}
  }
  static async perfil(req, res){
    
  }
}
export default AdministradorController