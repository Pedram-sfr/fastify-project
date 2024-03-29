import { products } from "../db/products.js";

export const getOneProduct = (req,reply) => {
    const {id} = req.params;
    const product = products.find(p => p.id == id);
    if(!product) reply.code(404).send("Not Found");
    reply.send(product)
}

export const getAllProduct = (req,reply)=>{
    reply.send(products)
}
