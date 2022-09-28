// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request: any, reply: any) => {
  reply
    .header('Authorization', request.headers['Authorization'])
    .header('X-Date', request.headers['X-Date'])
    .header('Content-Type', request.headers['Content-Type'])
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()