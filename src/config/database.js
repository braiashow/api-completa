import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()

const { Pool } = pg

const poolConfig = {}

if (process.env.DATABASE_URL) {
  poolConfig.connectionString = process.env.DATABASE_URL
} else {
  poolConfig.user = process.env.PGUSER
  poolConfig.password = process.env.PGPASSWORD
  poolConfig.host = process.env.PGHOST
  poolConfig.port = process.env.PGPORT
  poolConfig.database = process.env.PGDATABASE
}

// Enable SSL when PGSSLMODE is not 'disable' (common for managed Postgres)
if (!process.env.PGSSLMODE || process.env.PGSSLMODE !== 'disable') {
  // Accept self-signed / provider certs by default; set PGSSLMODE=verify-full to enforce
  poolConfig.ssl = { rejectUnauthorized: false }
}

const conexao = new Pool(poolConfig)

try {
  await conexao.query('select 1')
  console.log('Conexão com o banco de dados estabelecida com sucesso.')
} catch (error) {
  console.error({ mensagem: 'Erro ao iniciar banco', erro: error.message })
}

export default conexao;