import { genCollection } from '../helpers/db.js'
// Realizar un EndPolnt que permita crear una bodegas.(agregar en los comentarios de la función los datos de entrada).

const postNewBodega = async (req, res) => {
    try {
        //const {nombre, id_responsable, estado } = req.body;
        const post = await genCollection('bodegas')
        const newBodega = post.insertOne(req.body);
        res.status(201).json(newBodega);
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.status(400).json({
            message: error.message
        });
    }
    
};


export {
    postNewBodega
}