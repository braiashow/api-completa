import { conexao } from "pg";
import conexao from "../../../config/database.js"

class EmbarcacoesModel {
  constructor(numPat, nome, tipo, situacao) {
    this.numPat = numPat;
    this.nome = nome;
    this.tipo = tipo;
    this.situacao = situacao;
  }
  static async cadastrar(
    numPat,
    nome,
    tipo,
    situacao,
  ){
    const dados = [
        numPat,
        nome,
        tipo,
        situacao,  
    ];
    const query = `INSERT INTO embarcacoes(
    numPat,
    nome,
    tipo,
    situacao)
    VALUES($1, $2, $3, $4)RETURNING *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }
  static async listarTodos(){
    const query = `
    SELECT *
    FROM embarcacoes
    ORDER BY numPat`;
    const resultado = await conexao.query(query);
    return resultado.rows;
  }
  static async listarPorNumPat(numPat){
    const dados = [numPat];
    const query = `
    SELECT *
    FROM embarcacoes
    WHERE numPat = $1`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }
  static async atualizarTotal(
    numPat,
    nome,
    tipo,
    situacao,
  ){
    const dados = [
      numPat,
      nome,
      tipo,
      situacao,
    ];
    const query = `
    INSERT INTO embarcacoes (
    numPat,
    nome,
    tipo,
    situacao,
    )
    VALUES ($1, $2, $3, $4)
    RETURNING *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }
  static async atualizarParcial(
    numPat,
    nome,
    tipo,
    situacao,
  ){
    const dados = [
      numPat,
      nome,
      tipo,
      situacao,
    ];
    const query = `
    UPDATE embarcacoes SET 
      nome = COALESCE($2, nome),
      tipo = COALESCE($3, tipo),
      situacao = COALESCE($4, situacao)
      WHERE numPat = $1
      RETURNING *`;
      const resultado = await conexao.query(query, dados);
      return resultado.rows;
  }
  static async excluirPorNumPat(numPat){
    const dados = [numPat];
    const query = `
    DELETE FROM embarcacoes
    WHERE numPat = $1
    RETURNING *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;

  }
  static async excluirTodos(){
    const query = `DELETE FROM embarcacoes RETURNING *`;
    const resultado = await conexao.query(query);
    return resultado.rows;
  }
}
export default EmbarcacoesModel;
