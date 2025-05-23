const db = require('../../database/db');

const resolvers = {
    Query: {

        getPoets: async () => await db('Poet'),
        getPoems: async () => await db('Poem'),
        getCustomer: async () => await db('Customer'),
        getPoemPublication: async () => await db('Poem_Publication'),
        getSalePublication: async () => await db('Sale_Publication'),
  
        getPoetPoems: async () => {
        const result = await db.raw('CALL GetPoetPoems()');
        return result[0][0]; 
        },
        getSaleCustomers: async () => {
        const result = await db.raw('CALL GetSaleCustomers()');
        return result[0][0];
        },
        getPublicationPoems: async () => {
        const result = await db.raw('CALL GetPublicationPoems()');
        return result[0][0];
        }

    },
    Mutation: {

    addPoet: async (_, args) => {
    const [poet_code] = await db('Poet').insert(args);
    return await db('Poet').where({ poet_code }).first();
    },

    addPoem: async (_, args) => {
    const [poem_code] = await db('Poem').insert(args);
    return await db('Poem').where({ poem_code }).first();
    },

    addCustomer: async (_, args) => {
    const [customer_code] = await db('Customer').insert(args);
    return await db('Customer').where({ customer_code }).first();
    },

    addSale: async (_, args) => {
    const [sale_code] = await db('Sale').insert(args);
    return await db('Sale').where({ sale_code }).first();
    },
    updateCustomer: async (_, args) => {
    const { customer_code, ...data } = args;
    await db('Customer').where({ customer_code }).update(data);
    return await db('Customer').where({ customer_code }).first();
    },
    updatePublication: async (_, args) => {
    const { publication_code, ...data } = args;
    await db('Publication').where({ publication_code }).update(data);
    return await db('Publication').where({ publication_code }).first();
    },
    updateSale: async (_, args) => {
    const { sale_code, ...data } = args;
    await db('Sale').where({ sale_code }).update(data);
    return await db('Sale').where({ sale_code }).first();
    },
    deletePoemPublication: async (_, { poem_code, publication_code }) => {
    await db('Poem_Publication').where({ poem_code, publication_code }).del();
    return "Deleted successfully";
    },
    deleteSalePublication: async (_, { sale_code, publication_code }) => {
    await db('Sale_Publication').where({ sale_code, publication_code }).del();
    return "Deleted successfully";
    },  
    
    }
};
module.exports = resolvers;