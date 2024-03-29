const indexRoute ={
    schema: {
        tags: ['home'],
        security: [{apiKey: []}],
        response:{
            200: {
                type: "object",
                properties: {
                    headers: {
                        type: 'object',
                        properties: {
                            authorization: {type: 'string'}
                        }
                    },
                    message: {type: 'string'}
                }
            }
        }
    },
    handler: (req,reply)=>{
        reply.send({
            headers: req.headers,
            message: "hello fastify"
        })
    }
}
export default function indexRoutes(fastify,options,done) {
    fastify.get("/",indexRoute)
    done()
}