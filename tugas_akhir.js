db.createCollection("toko",{
    validationAction :'error',
    validator : {
        $jsonSchema:{
            bsonType: 'object',
            required:['nama_toko','alamat','no_telp','transaksi'],
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
                },
                transaksi:{
                    bsonType:'array',
                    description:'array value',
                    items:{
                        bsonType:'object',
                        required:['kode_transaksi','id_karyawan','id_pelanggan','tgl_transaksi'],
                        properties:{
                            kode_transaksi:{
                                bsonType:'string',
                                description:'kudu string'
                            },
                            id_karyawan:{
                                bsonType:'string',
                                description:'kudu string'
                            },
                            id_pelanggan:{
                                bsonType:'string',
                                description:'kudu string'
                            },
                            tgl_transaksi:{
                                bsonType:'date',
                                description:'kudu date'
                            }
                        }
                    }
                }
            }
        }
    }
})

db.toko.insertOne(
    {nama_toko:'Komputer Jaya',alamat:'Jl. Manuk Emprit',no_telp:'0812345678910',
    transaksi:[
        {kode_transaksi:'KT001',id_karyawan:'K001',id_pelanggan:'P001',tgl_transaksi:new Date()},
        {kode_transaksi:'KT002',id_karyawan:'K002',id_pelanggan:'P001',tgl_transaksi:new Date()},
        {kode_transaksi:'KT003',id_karyawan:'K003',id_pelanggan:'P002',tgl_transaksi :new Date()},
        {kode_transaksi:'KT004',id_karyawan:'K004',id_pelanggan:'P003',tgl_transaksi :new Date()},
        {kode_transaksi:'KT005',id_karyawan:'K005',id_pelanggan:'P004',tgl_transaksi :new Date()}]}
)

db.createCollection("pelanggan",{
    validationAction : 'error',
    validator : {
        $jsonSchema:{
            bsonType: 'object',
            required:['id_pelanggan','nama','alamat','no_telp','email','transaksi'],
            properties:{
                id_pelanggan:{
                    bsonType: 'string',
                    description: 'harus bertipe string'
                },
                nama:{
                    bsonType:'string',
                    description: 'harus bertipe string'
                },
                alamat:{
                    bsonType:'string',
                    description:'harus bertipe string'
                },
                no_telp:{
                    bsonType:'string',
                    description:'harus bertipe string'
                },
                email:{
                    bsonType:'string',
                    description:'harus bertipe string'
                },
                transaksi:{
                    bsonType:'array',
                    items:{
                        bsonType:'object',
                        required: ['kode_transaksi','id_karyawan','nama_toko','tgl_transaksi'],
                        properties:{
                            kode_transaksi:{
                                bsonType:'string',
                                description:'kudu string'
                            },
                            id_karyawan:{
                                bsonType:'string',
                                description:'kudu string'
                            },
                            nama_toko:{
                                bsonType:'string',
                                description:'kudu string'
                            },
                            tgl_transaksi:{
                                bsonType: 'date',
                                description: 'kudu date'
                            }

                        }
                    }
                }
            }
        }
    }
})

db.pelanggan.insertMany([
    {id_pelanggan:'P001',nama:'Rhomy',alamat:'Jl.Mojopahit no. 12',no_telp:'087896564787',email:'rhomymf@gmail.com',
    transaksi:[
        {kode_transaksi:'KT001',id_karyawan:'K001',nama_toko:'Komputer Jaya',tgl_transaksi:new Date()},
        {kode_transaksi:'KT002',id_karyawan:'K002',nama_toko:'Komputer Jaya',tgl_transaksi:new Date()}]},

    {id_pelanggan:'P002',nama:'Bambang',alamat:'Jl.Radenkiansantang',no_telp:'089546735231',email:'bambang01@gmail.com',
    transaksi:[
        {kode_transaksi:'KT003',id_karyawan:'K003',nama_toko:'Komputer Jaya',tgl_transaksi:new Date()}]},

    {id_pelanggan:'P003',nama:'Angga',alamat:'Jl.Kenangan',no_telp:'082314251524',email:'angga01@gmail.com',
    transaksi:[
        {kode_transaksi:'KT004',id_karyawan:'K004',nama_toko:'Komputer Jaya',tgl_transaksi:new Date()}]},

    {id_pelanggan:'P004',nama:'Sumanto',alamat:'Jl.Kesedihan',no_telp:'088152637187',email:'sumanto01@gmail.com',
    transaksi:[
        {kode_transaksi:'KT005',id_karyawan:'K005',nama_toko:'Komputer Jaya',tgl_transaksi:new Date()}]},

    {id_pelanggan:'P005',nama:'Siswanto',alamat:'Jl.Merpati',no_telp:'088152637109',email:'siswanto01@gmail.com',
    transaksi:[
        {kode_transaksi:'KT006',id_karyawan:'K006',nama_toko:'Komputer Jaya',tgl_transaksi:new Date()}]}
])


db.createCollection("karyawan",{
    validationAction : 'error',
    validator : {
        $jsonSchema:{
            bsonType: 'object',
            required:['id_karyawan','nama','jabatan','alamat','no_telp','email'],
            properties:{
                id_karyawan:{
                    bsonType: 'string',
                    description: 'harus bertipe string'
                },
                nama:{
                    bsonType:'string',
                    description: 'harus bertipe string'
                },
                jabatan:{
                    bsonType:'string',
                    description:'tipe string'
                },
                alamat:{
                    bsonType:'string',
                    description:'harus bertipe string'
                },
                no_telp:{
                    bsonType:'string',
                    description:'harus bertipe string'
                },
                email:{
                    bsonType:'string',
                    description:'harus bertipe string'
                },
                transaksi:{
                    bsonType:'array',
                    items:{
                        bsonType:'object',
                        required: ['kode_transaksi','nama_toko','id_pelanggan','tgl_transaksi'],
                        properties:{
                            kode_transaksi:{
                                bsonType:'string',
                                description:'kudu string'
                            },
                            nama_toko:{
                                bsonType:'string',
                                description:'kudu string'
                            },
                            id_pelanggan:{
                                bsonType:'string',
                                description:'kudu string'
                            },
                            tgl_transaksi:{
                                bsonType: 'date',
                                description: 'kudu date'
                            }

                        }
                    }


                }
            }
        }
    }
})

db.karyawan.insertMany([
    {id_karyawan:'K001',nama:'Sirojul',jabatan:'Kasir',alamat:'Jl. Majumundur',no_telp:'089767676564',email:'sirojul01@gmail.com',
    transaksi:[
        {kode_transaksi:'KT001',id_pelanggan:'P001',nama_toko:'Komputer Jaya',tgl_transaksi:new Date()}]},

    {id_karyawan:'K002',nama:'Affan',jabatan:'Kasir',alamat:'Jl. Bengawan',no_telp:'085435432457',email:'affan01@gmail.com',
    transaksi:[
        {kode_transaksi:'KT002',id_pelanggan:'P001',nama_toko:'Komputer Jaya',tgl_transaksi:new Date()}]},

    {id_karyawan:'K003',nama:'Gilang',jabatan:'Kasir',alamat:'Jl. Kepiting',no_telp:'082341567876',email:'gilang01@gmail.com',
    transaksi:[
        {kode_transaksi:'KT003',id_pelanggan:'P002',nama_toko:'Komputer Jaya',tgl_transaksi:new Date()}]},

    {id_karyawan:'K004',nama:'Faix',jabatan:'Kasir',alamat:'Jl. Ikanteri',no_telp:'089615436817',email:'faix01@gmail.com',
    transaksi:[
        {kode_transaksi:'KT004',id_pelanggan:'P003',nama_toko:'Komputer Jaya',tgl_transaksi:new Date()}]},

    {id_karyawan:'K005',nama:'Dino',jabatan:'Kasir',alamat:'Jl. Sukacita',no_telp:'085789456346',email:'dinosaurus@gmail.com',
    transaksi:[
        {kode_transaksi:'KT005',id_pelanggan:'P004',nama_toko:'Komputer Jaya',tgl_transaksi:new Date()}]}
])


db.createCollection("kategori",{
    validationAction : 'error',
    validator : {
        $jsonSchema:{
            bsonType: 'object',
            required:['id_kategori','nama'],
            properties:{
                id_kategori:{
                    bsonType: 'string',
                    description: 'harus bertipe string'
                },
                nama:{
                    bsonType:'string',
                    description: 'harus bertipe string'
                },
                barang:{
                    bsonType:'array',
                    items:{
                        bsonType:'object',
                        required:['id_brg','nama_brg','harga','qty','varian_tipe','merk','deskripsi'],
                        properties:{
                            id_brg:{
                                bsonType:'string',
                                description:'kudu string'
                            },
                            nama_brg:{
                                bsonType:'string',
                                description:'kudu string'
                            },
                            harga:{
                                bsonType:'int',
                                description:'kudu integer'
                            },
                            qty:{
                                bsonType:'int',
                                description:'kudu integer'
                            },
                            varian_tipe:{
                                bsonType:'string',
                                description:'kudu string'
                            },
                            merk:{
                                bsonType:'string',
                                description:'kudu string'
                            },
                            deskripsi:{
                                bsonType:'string',
                                description:'kudu string'
                            }
                        }
                    }
                }
            }
        }
    }
})

db.kategori.insertMany([
    {id_kategori:'C001',nama:'Laptop'},
    {id_kategori:'C002',nama:'Mouse'},
    {id_kategori:'C003',nama:'Hardware'},
    {id_kategori:'C004',nama:'Aksesoris'}
])

db.createCollection("barang"),{
    validationAction : 'error',
    validator : {
        $jsonSchema:{
            bsonType: 'object',
            required:['id_brg','nama','harga','id_kategori','quantity','varian_type','merk','description'],
            properties:{
                id_brg:{
                    bsonType: 'string',
                    description: 'harus bertipe string'
                },
                nama:{
                    bsonType:'string',
                    description: 'harus bertipe string'
                },
                harga:{
                    bsonType:'string',
                    description:'tipe string'
                },
                id_kategori:{
                    bsonType:'string',
                    description:'harus bertipe string'
                },
                quantity:{
                    bsonType:'int',
                    description:'harus bertipe int'
                },
                
                varian_tipe:{
                    bsonType:'string',
                    description:'harus bertipe string'
                },
                merk:{
                    bsonType:'string',
                    description:'harus bertipe string'
                },
                description:{
                    bsonType:'string',
                    description:'harus bertipe string'
                },
            }
        }
    }
}

db.barang.insertMany([
    {id_brg:'B001',nama:'Asus ROG Zhephyrus M16',harga:'43000000',id_kategori:'C001',quantity:20,varian_tipe:'M16',merk:'Asus',description:'OS windows 11 home, GPU NVIDIA Geforce RTX 3070 Ti, Proccessor Core i9 12900H'},
    {id_brg:'B002',nama:'Asus ROG Zhephyrus G14',harga:'22500000',id_kategori:'C001',quantity:25,varian_tipe:'G14',merk:'ASUS',description:'Ryzen 9 5900 16GB 1TB ssd RTX3060 6GB W10 14FHD'},
    {id_brg:'B003',nama:'Mouse Logitech G102',harga:'250000',id_kategori:'C002',quantity:100,varian_tipe:'G102',merk:'Logitech',description:'Resolusi 200 8.000 dpi, Format data USB 16bit/axis, Report rate USB 1.000 Hz (1md) Tombol(kiri/kanan), 10 juta klik '},
    {id_brg:'B004',nama:'Asus ROG strix Z590-E',harga:'8500000',id_kategori:'C003',quantity:50,varian_tipe:'Z590',merk:'Asus',description:'IntelZ590 LGA 1200 ATX motherboard with PCIe 4.0'},
    {id_brg:'B005',nama:'Mousepad Rexus Kvlar T10',harga:'65000',id_kategori:'C004',quantity:150,varian_tipe:'T10',merk:'Rexus',description:'Bahan kvlar ,panjang 1 meter'}
])


db.createCollection("transaksi"),{
    validationAction : 'error',
    validator : {
        $jsonSchema:{
            bsonType: 'object',
            required:['kode_transaksi','nama_toko','id_karyawan','id_pelanggan','total','tgl_transaksi'],
            properties:{
                kode_transaksi:{
                    bsonType: 'string',
                    description: 'harus bertipe string'
                },
                nama_toko:{
                    bsonType:'string',
                    description: 'harus bertipe string'
                },
                id_karyawan:{
                    bsonType:'string',
                    description:'tipe string'
                },
                id_pelanggan:{
                    bsonType:'string',
                    description:'harus bertipe string'
                },  
                tgl_transaksi:{
                    bsonType:'date',
                    description:'harus bertipe date'
                }
            }
        }
    }
}

db.transaksi.insertMany([
    {kode_transaksi:'KT001',nama_toko:'Komputer Jaya',id_karyawan:'K001',id_pelanggan:'P001',tgl_transaksi:''},
    {kode_transaksi:'KT002',nama_toko:'Komputer Jaya',id_karyawan:'K002',id_pelanggan:'P001',tgl_transaksi:''},
    {kode_transaksi:'KT003',nama_toko:'Komputer Jaya',id_karyawan:'K003',id_pelanggan:'P002',tgl_transaksi:''},
    {kode_transaksi:'KT004',nama_toko:'Komputer Jaya',id_karyawan:'K004',id_pelanggan:'P003',tgl_transaksi:''},
    {kode_transaksi:'KT005',nama_toko:'Komputer Jaya',id_karyawan:'K005',id_pelanggan:'P004',tgl_transaksi:''}
])


db.createCollection("detail_transaksi"),{
    validationAction : 'error',
    validator : {
        $jsonSchema:{
            bsonType: 'object',
            required:['id_brg','kode_transaksi','qty','harga'],
            properties:{
                id_brg:{
                    bsonType: 'string',
                    description: 'harus bertipe string'
                },
                kode_transaksi:{
                    bsonType:'string',
                    description: 'harus bertipe string'
                },
                qty:{
                    bsonType:'int',
                    description:'tipe int'
                },
                harga:{
                    bsonType:'int',
                    description:'harus bertipe int'
                }
            }
        }
    }
}

db.detail_transaksi.insertMany([
    {id_brg:'B001',kode_transaksi:'KT001',qty:1,harga:43000000},
    {id_brg:'B002',kode_transaksi:'KT002',qty:1,harga:22500000},
    {id_brg:'B003',kode_transaksi:'KT003',qty:1,harga:250000},
    {id_brg:'B004',kode_transaksi:'KT004',qty:1,harga:8500000},
    {id_brg:'B005',kode_transaksi:'KT005',qty:1,harga:65000}
])