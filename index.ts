// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request: any, reply: any) => {
  reply
    .header('Authorization', request.headers['authorization'])
    .header('X-Date', request.headers['x-date'])
    .header('Content-Type', request.headers['content-type'])
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