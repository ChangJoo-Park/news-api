'use strict'

const Hapi = require('hapi')
const routes = require('./routes')

const server = Hapi.server({
  host: 'localhost',
  port: 8000
})

async function start () {
  try {
    routes(server)
    await server.start()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
