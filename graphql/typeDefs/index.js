const {gql} = require('apollo-server');

const typeDefs = gql`
    type Mutation {
        addPoet(first_name: String!, surname: String!, address: String, postcode: String, telephone_number: String): Poet!
        addPoem(poem_title: String!, poem_contents: String, poet_code: Int!): Poem!
        addCustomer(first_name: String!, surname: String!, address: String, postcode: String, telephone_number: String): Customer!
        addSale(date: String!, amount: Float!, customer_code: Int!): Sale!
        updateCustomer(customer_code: ID!, first_name: String, surname: String, address: String, postcode: String, telephone_number: String): Customer!
        updatePublication(publication_code: ID!, title: String, price: Float): Publication!
        updateSale(sale_code: ID!, date: String, amount: Float, customer_code: Int): Sale!
        deletePoemPublication(poem_code: Int!, publication_code: Int!): String
        deleteSalePublication(sale_code: Int!, publication_code: Int!): String

    }

    type Poet {
        poet_code: ID
        first_name: String
        surname: String
        address: String
        postcode: String
        telephone_number: String
    }

    type Poem {
        poem_code: ID
        poem_title: String
        poem_contents: String
        poet_code: Int
    }

    type Publication {
        publication_code: ID
        title: String
        price: Float
        poem_code: Int
    }

    type Customer {
        customer_code: ID
        first_name: String
        surname: String
        address: String
        postcode: String
        telephone_number: String
    }
    
    type Poem_Publication {
        poem_code: ID
        publication_code: ID
    }

    type Sale_Publication {
        sale_code: ID
        publication_code: ID
    }
    
    type Sale_Customer {
        sale_code: ID
        customer_code: ID
    }

    type PoetPoem {
        poet_code: ID
        poet_name: String
        poet_surname: String
        poem_code: ID
        poem_title: String
    }

    type SaleCustomer {
        sale_code: ID
        date: String
        amount: Float
        customer_code: ID
        customer_name: String
        customer_surname: String
    }

    type PublicationPoem {
        publication_code: ID
        publication_title: String
        poem_code: ID
        poem_title: String
    }

    type Sale {
        sale_code: ID
        date: String
        amount: Float
        customer_code: Int
    }


    type Query {
        getPoets: [Poet]
        getPoems: [Poem]
        getCustomer: [Customer]
        getPoemPublication: [Poem_Publication]
        getSalePublication: [Sale_Publication]
        getSaleCustomers: [Sale_Customer]
        getAllPoets: [Poet]
        getPoetPoems: [PoetPoem]
        getPublicationPoems: [PublicationPoem]
    }
    
`;


module.exports = typeDefs