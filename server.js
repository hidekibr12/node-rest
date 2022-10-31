//config do servidor
const express =  require('express')
const app = express()
const port = process.env.PORT  || 3000

//exportar as config
module.exports = {app,port}