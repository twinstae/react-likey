const fastify = require('fastify')({ logger: true })
const ogs = require('open-graph-scraper');

fastify.route({
  method: 'POST',
  url: '/og',
  schema: {
    querystring: {
      url: { type: 'string' }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          title: { type: 'string' }
        }
      }
    }
  },
  handler: async (request, reply) => {
    console.log(request.query)
    const options = { url: request.query.url };
    const data = await ogs(options);

    console.log(data.result)
    return { title: data.result.ogTitle }
  }
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()