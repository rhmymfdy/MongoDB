// Create category collection
db.createCollection("merchants", {
        validationAction: "error",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "balance", "type", "address"],
                properties: {
                    name: {
                        bsonType: "string",
                        description: "Must be a string"
                    },
                    balance: {
                        bsonType: "long",
                        description: "Must be a long"
                    },
                    type: {
                        enum: ["PREMIUM", "REGULAR"],
                        description: "Can only be one of enum values"
                    },
                    address: {
                        bsonType: "object",
                        required: ["street", "city"],
                        properties: {
                            street: {
                                bsonType: "string",
                                description: "Must be a string"
                            },
                            city: {
                                bsonType: "string",
                                description: "Must be a string"
                            },
                            country: {
                                bsonType: "string",
                                description: "Must be a string"
                            }
                        }}}}}
    })


// Insert valid document
db.merchants.insertOne({
        _id: "toko1",
        name: "Toko Satu",
        balance: new NumberLong(1000000),
        type: "PREMIUM",
        address: {
            street: "Jalan Raya Belum Jadi",
            city: "Jakarta",
            country: "Indonesia"
        }
    })

// Insert Invalid document: Name is blank
db.merchants.insertOne({
        _id: "toko2",
        balance: new NumberLong(1000000),
        type: "PREMIUM",
        address: {
            street: "Jalan Raya Belum Jadi",
            city: "Jakarta",
            country: "Indonesia"
        }
    })

// Insert Invalid document: Address City is blank
db.merchants.insertOne({
        _id: "toko2",
        name: "Toko Dua",
        balance: new NumberLong(1000000),
        type: "PREMIUM",
        address: {
            street: "Jalan Raya Belum Jadi",
            country: "Indonesia"
        }
    })
    
// Add validator to orders collection (pertemuan 11)
db.runCommand({
        collMod: "orders",
        validationAction: "error",
        validator: {
            $jsonSchema: {
                bsonType: "object",
                required: ["product","total", "customer"],
                properties: {
                    product: {
                        bsonType: "string",
                        description: "Must be a string"
                    },
                    total: {
                        bsonType: "double",
                        description: "Must be a double"
                    },
                    customer: {
                        bsonType: "string",
                        description: "Must be a string"
                    }
                }
            }
        }
    })

// Insert Invalid document: total is string
db.orders.insertOne({
      product: "salah", total: "2.000", customer: "salah"
    });

// Insert Invalid document: customer is blank
db.orders.insertOne({
      product: "salah", total: 2.00
    });

// Insert Valid document
db.orders.insertOne({
      product: "guitar", total: 199.99, customer: "Kevin"
    });
    
    
        
    