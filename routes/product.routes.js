import { getAllProduct, getOneProduct } from "../handler/products.handler.js"

const product = {
    type: 'object',
    properties: {
        id: {type: 'integer'},
        name: {type: 'string'}
    }
}
const getOneProductItem = {
    schema: {
        tags: ['products'],
        response:{
            200: product
        }
    },
    handler: getOneProduct
}
const getProductsItem ={
    schema: {
        tags: ['products'],
        response:{
            200: {
                type: 'array',
                items: product
            }
        }
    },
    handler: getAllProduct
}

export default function productRoutes(fastify,options,done) {
    fastify.get("/",getProductsItem)
    fastify.get("/:id",getOneProductItem);
    done();
}