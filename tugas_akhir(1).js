db.createCollection("toko"),{
    validationAction : 'error',
    validator : {
        $jsonSchema:{
            bsonType: 'object',
            required:['nama_toko','alamat','no_telp'],
            properties:{
                nama_toko:{
                    bsonType: 'string',
                    description: 'harus bertipe string'
                },
                alamat:{
                    bsonType:'string',
                    description:'harus bertipe string'
                },
                no_telp:{
                    bsonType:'string',
                    description:'harus bertipe string'
                }
            }
        }
    }
}