import EmbarcacoesModel from "../models/embarcacoes.models.js";


class EmbarcacoesController {
  static async cadastrar(req, res) {
    try {
      const {
        numPat,
        nome,
        tipo,
        situacao,
      } = req.body;

      if (
        !numPat ||
        !nome ||
        !tipo ||
        !situacao
      ) {
        return res.status(400).json({
          mensagem: "Todos os campos são obrigatórios.",
        });
      }

      const embarcacao = await EmbarcacoesModel.cadastrar(
        numPat,
        nome,
        tipo,
        situacao,
      );

      return res.status(201).json({
        mensagem: "Embarcação cadastrada com sucesso.",
        embarcacao
      });
    } catch (error) {
      return res.status(500).json({
        mensagem: "Erro interno do servidor.",
        erro: error.message,
      });
    }
  }

  static async listarTodos(req, res) {
    try {
      const embarcacao = await EmbarcacoesModel.listarTodos();

      if (!embarcacao) {
        return res.status(404).json({
          mensagem:
            "Nenhuma embarcação encontrada para o Número Patrimonial especificado.",
        });
      }

      return res.status(200).json({
        embarcacao,
      });
    } catch (error) {
      return res.status(500).json({
        mensagem: "Erro ao buscar a embarcação.",
        erro: error.message,
      });
    }
  }

  static async atualizarTotal(req, res) {
    try {
      const { numPat } = req.params;

      const {
        nome,
        tipo,
        situacao,
      } = req.body;

      if (
        !numPat ||
        !nome ||
        !tipo ||
        !situacao
      ) {
        return res.status(400).json({
          mensagem:
            "Todos os campos são obrigatórios para a atualização total.",
        });
      }

      const embarcacao = await EmbarcacoesModel.atualizar(
        numPat,
        nome,
        tipo,
        situacao
      );

      if (!embarcacao) {
        return res.status(404).json({
          mensagem: "Embarcação não encontrada.",
        });
      }

      return res.status(200).json({
        mensagem: "Embarcação atualizada com sucesso.",
        embarcacao,
      });
    } catch (error) {
      return res.status(500).json({
        mensagem: "Erro ao atualizar a embarcação.",
        erro: error.message,
      });
    }
  }

  static async atualizarParcial(req, res) {
    try {
      const { numPat } = req.params;

      const {
        nome,
        tipo,
        situacao,
      } = req.body;

      const embarcacao = await EmbarcacoesModel.atualizarParcial(
        numPat,
        nome,
        tipo,
        situacao
      );

      if (!embarcacao) {
        return res.status(404).json({
          mensagem: "Embarcação não encontrada.",
        });
      }

      return res.status(200).json({
        mensagem: "Embarcação atualizada parcialmente com sucesso.",
        embarcacao,
      });
    } catch (error) {
      return res.status(500).json({
        mensagem: "Erro ao atualizar parcialmente a Embarcação.",
        erro: error.message,
      });
    }
  }

  static async excluirPorNumPat(req, res) {
    try {
      const { numPat } = req.params;

      const embarcacao = await EmbarcacoesModel.excluirPorCodigo(numPat);

      if (!embarcacao) {
        return res.status(404).json({
          mensagem: "Embarcação não encontrada.",
        });
      }

      return res.status(200).json({
        mensagem: "Embarcação excluída com sucesso.",
        embarcacao,
      });
    } catch (error) {
      return res.status(500).json({
        mensagem: "Erro ao excluir a embarcação.",
        erro: error.message,
      });
    }
  }

  static excluirTodos(req, res) {
    try {
      EmbarcacoesModel.excluirTodos();

      return res
        .status(200)
        .json({ mensagem: "Todas as embarcações foram excluidas!" });
    } catch (error) {
      return res
        .status(500)
        .json({
          mensagem: "Erro ao excluir todas as embarcações!",
          erro: error.message
        });
    }
  }
}

export default EmbarcacoesController;