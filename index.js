const jsonServer = require('json-server')
const realServer = jsonServer.create()
const router = jsonServer.router('db.json')
const middleweare = jsonServer.defaults()

realServer.use(middleweare)
realServer.use(router)

const port = 5000 ||process.env.port

realServer.listen(port,()=>{
    console.log(`realserver started at port ${port} and waiting for the request`)
})