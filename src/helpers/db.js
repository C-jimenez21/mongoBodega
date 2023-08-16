import  {con}  from '../DB/connection.js';

const genCollection = async (coleccion) => {
    try {
        let db = await con();
        let newCollection = db.collection(coleccion)
        return newCollection;
        
    } catch (error) {
        console.log(error);
    }
}

const startTransaction = async () => {
    const db = await con();
    const session = db.client.startSession(); 
    session.startTransaction();
    return session;
}

export {
    genCollection,
    startTransaction
}