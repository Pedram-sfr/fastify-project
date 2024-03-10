import Fastify from "fastify";
import { products } from "./db/products.js";
import productRoutes from "./routes/product.routes.js";
import indexRoutes from "./routes/index.routes.js";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
const fastify = Fastify({
    logger: true
})
const PORT = 3000;
fastify.register(fastifySwagger,{
    swagger: {
        info: {
            title: "fastify Swagger",
            description: "swagger: documantion of my application",
            version: "0.1.0"
        },
        tags: [
            {name: "products",description: "admin panel manage product"}
        ],
        schemes: ['http'],
        securityDefinitions: {
            apiKey: {
                type: "apiKey",
                in: "header",
                name: "authorization"
            }
        }
    }
});
fastify.register(fastifySwaggerUi,{
    prefix: "swagger",
    exposeRoute: true,
})
fastify.register(indexRoutes)
fastify.register(productRoutes,{prefix: "products"})
const main = async ()=>{
    try {
        await fastify.listen(PORT);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}
main();