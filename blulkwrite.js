db.customer.bulkWrite([
        {
            insertOne: {
                document: {
                    asal: "SMA 1 Banyuwangi",
                    nama: "Andi Kurniawan"
                }
            }
        },
        {
            insertOne: {
                document: {
                    asal: "SMU 1 Banyuwangi",
                    nama: "Bagus Kurniawan"
                }
            }
        },
        {
            insertOne: {
                document: {
                    asal: "SMANSA Banyuwangi",
                    nama: "Catur Kurniawan"
                }
            }
        },
        {
            updateMany: {
                filter: {
                    asal: {
                        $in: ["SMA 1 Banyuwangi", "SMU 1 Banyuwangi", "SMANSA Banyuwangi"]
                    }
                },
                update: {
                    $set: {
                        asal: "SMAN 1 GLAGAH Banyuwangi"
                    }
                }
            }
        }
    ]);
    
db.customer.insertMany([
    {asal:"SMANTA Banyuwangi",nama:"Denis Kurniawan",alamat: "Rogojampi"},
    {asal:"SMANTA Banyuwangi",nama:"Erik Kurniawan",alamat: "Srono"},
    {asal:"SMKN 1 Banyuwangi",nama:"Ferdi Kurniawan",alamat: "Songgon"},
    {asal:"SMKN 1 Banyuwangi",nama:"Firman Kurniawan",alamat: "Glagah"},
    {asal:"SMKN 1 Banyuwangi",nama:"Geri Kurniawan",alamat: "Licin"}
]);

db.customer.bulkWrite([
    {insertOne:{
        document:{
            asal:"MAN Banyuwangi",
            nama:"Harun Kurniawan",
            alamat:"Kabat"
        }
    }},
    {insertOne:{
        document:{
            asal:"MAN Banyuwangi",
            nama:"Iwan Kurniawan",
            alamat:"Kalipuro"
        }
    }},
    {updateMany:{
        filter:{
            alamat:{
                $exists: false
            }
        },
        update:{
            $set:{
                alamat:"Banyuwangi"
            }
        }
    }},
    {updateMany:{
        filter:{
            asal: "MAN Banyuwangi"
        },
        update:{
            $set:{
                asal:"MAN 1 Banyuwangi"
            }
        }
    }},
    {replaceOne:{
        filter:{
            nama:"Andi Kurniawan"
        },
        replacement:{
            asal:"SMAN 1 Giri",
            nama:"Joko Kurniawan",
            alamat:"Muncar"
        }
    }},
    {deleteOne:{
        filter:{
            nama:"Ferdi Kurniawan"
        }
    }}
]);

db.customer.bulkWrite([
    {replaceOne:{
        filter:{
            nama:"Andi Kurniawan"
        },
        replacement:{
            asal:"SMAN 1 Giri",
            nama:"Joko Kurniawan",
            alamat:"Muncar"
        }
    }},
    {deleteOne:{
        filter:{
            nama:"Ferdi Kurniawan"
        }
    }}
]);