import jwt from'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

class AutenticacaoMiddleware{
    static autenticar(req, res, next){
        const authead = req.heares['authorization']
        const token = authead && authead.split(' ')[1]
        if(!token){
           return    res.status(401).json({mensagem: "Acesso não autorizado"})
        }
        jwt.verify(token, process.env.JWT_SECRET, (error, usuario) =>{
            if(error){
                return res.status(403).json({
                    mensagem: "Acesso nao autorizado"})
                }
                req.usuario = usuario
            })
           
    }
}
export default AutenticacaoMiddleware