const fastify = require('fastify')({ logger: true })
const ogs = require('open-graph-scraper');

fastify.register(require('fastify-cors'), [{
  origin: "localhost:3000",
}, {
  origin: "localhost:8000"
}])

// ogImage : Image | Image[] | undefined
function getImage(ogImage) {
  if (!ogImage) {
    return "";
  }

  if (ogImage instanceof Array) {
    return ogImage[0].url
  }

  if (typeof ogImage === "object") {
    return ogImage.url
  }

  return "";
}
fastify.route({
  method: 'GET',
  url: '/og',
  schema: {
    querystring: {
      url: { type: 'string' }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          image: { type: 'string' }
        }
      }
    }
  },
  handler: async (request, response) => {
    console.log(request.query)
    const options = { url: request.query.url };
    const data = await ogs(options);

    console.log(data.result)

    return { title: data.result.ogTitle, image: getImage(data.result.ogImage) }
  }
})

const start = async () => {
  try {
    await fastify.listen(8000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()