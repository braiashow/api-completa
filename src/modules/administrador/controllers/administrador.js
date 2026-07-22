import AdministradorModel from "../models/administrador.js";
class AdministradorModel {
    static async cadastrar(req, res) {
        try {
            const { id, nome, email, senha } = req.body;

            if (!id || !nome || !email || !senha) {
                return res.status(400).json({
                    mensagem: "Todos os campos são obrigatórios"
                });
            }

            const totalAdmin = await AdministradorModel.contarAdmins();

            if (totalAdmin > 0) {
                return res.status(409).json({
                    mensagem: "Esse administrador já existe"
                });
            }
            if(senha.length < 8){
                return resposta.status(403).json({
                    mensagem: "..."
                })
            }
            const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,32}$/;

            if(!regex.test(senha)){
                return res.status(403).json({
                    mensagem: "Senha invalida! Sua senha deve conter pelo menos: 1 letra maiúscula, 1 letra minúscula, 1 número, 1 caractere especial (ex: @, #, $, %)"
                })

            }
            const salt = bcrypt.genSaltSync(10)
            const hashSenha = bcrypt.hashSync(senha, salt);
            const adminstrador = await AdministradorModel.cadastrar(id, nome, nome, senha=hashSenha)
            return res.status(201).json({mensagem: "Usuário cadastrado com sucesso"})

            // lógica para cadastrar o administrador

        } catch (error) {
            return res.status(500).json({
                mensagem: "Erro interno do servidor",
                erro: error.message
            });
        }
    }
}