import bcrypt from "bcrypt";
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

      if (senha.length < 8) {
        return res.status(400).json({
          mensagem: "A senha de administrador precisa ter no mínimo 8 caracteres",
        });
      }

      const regexSenha =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,32}$/;

      if (!regexSenha.test(senha)) {
        return res.status(400).json({
          mensagem:
            "Senha inválida! A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.",
        });
      }

      const regexEmail =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

      if (!regexEmail.test(email)) {
        return res.status(400).json({
          mensagem: "E-mail inválido",
        });
      }

      const totalAdmin = await AdministradorModel.contarAdmins();

      if (totalAdmin > 0) {
        return res.status(409).json({
          mensagem: "Já existe um administrador cadastrado",
        });
      }

      const hashSenha = await bcrypt.hash(senha, 10);

      await AdministradorModel.cadastrar(
        id,
        nome,
        email,
        hashSenha,
      );

      return res.status(201).json({
        mensagem: "Administrador cadastrado com sucesso",
      });
    } catch (error) {
      console.error("Erro ao cadastrar administrador:", error);

      return res.status(500).json({
        mensagem: "Erro interno do servidor",
        erro: error.message,
      });
    }
  }

  static async login(req, res) {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res.status(400).json({
          mensagem: "Forneça o e-mail e a senha para login",
        });
      }

      const administradorEncontrado =
        await AdministradorModel.buscarPorEmail(email);

      /*
       * Se buscarPorEmail retornar um array, usamos o primeiro registro.
       * Se retornar diretamente um objeto, usamos o próprio resultado.
       */
      const administrador = Array.isArray(administradorEncontrado)
        ? administradorEncontrado[0]
        : administradorEncontrado;

      if (!administrador) {
        return res.status(401).json({
          mensagem: "E-mail ou senha incorretos",
        });
      }

      if (administrador.ativo === false) {
        return res.status(403).json({
          mensagem: "Usuário inativo",
        });
      }

      const senhaCorreta = await bcrypt.compare(
        senha,
        administrador.senha,
      );

      if (!senhaCorreta) {
        return res.status(401).json({
          mensagem: "E-mail ou senha incorretos",
        });
      }

      if (!process.env.JWT_SECRET) {
        throw new Error("A variável JWT_SECRET não foi configurada");
      }

      const token = jwt.sign(
        {
          id: administrador.id,
          nome: administrador.nome,
          email: administrador.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_TEMPO_EXPIRADO || "1h",
        },
      );

      return res.status(200).json({
        mensagem: "Login realizado com sucesso",
        token,
        administrador: {
          id: administrador.id,
          nome: administrador.nome,
          email: administrador.email,
        },
      });
    } catch (error) {
      console.error("Erro no login:", error);

      return res.status(500).json({
        mensagem: "Erro interno do servidor",
        erro: error.message,
      });
    }
  }

  static async perfil(req, res) {
    try {
      return res.status(200).json({
        mensagem: "Perfil do administrador",
        administrador: req.administrador,
      });
    } catch (error) {
      console.error("Erro ao buscar perfil:", error);

      return res.status(500).json({
        mensagem: "Erro interno do servidor",
        erro: error.message,
      });
    }
  }
}

export default AdministradorController
