//importar as config do servidor
const {app,port} = require('../server')

//rotas
const index = require('./routes/index')(app)
const sobre = require('./routes/sobre')(app)

//escuta do servidor 
app.listen(port, () => {
    console.log(`Servidor escutando em em http://localhost:${port} `)
})