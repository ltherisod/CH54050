const productos = [
    {
        id:'1',
        name:'Gomitas Haribo',
        stock:10,
        price:1000,
        description:'loremjfvnfdsjgnjkfn fjknjgnjksdfng nfnsjsngknskjsg',
        imagen:'../images/haribo.jpg',
        category:'nuevos'
    },
    {
        id:'2',
        name:'Kinder Joy',
        stock:25,
        price:1500,
        description:'loremjfvnfdsjgnjkfn fjknjgnjksdfng nfnsjsngknskjsg',
        imagen:'../images/kinder.jpg',
        category:'mas vendidos'
    },
    {
        id:'3',
        name:'Nerds',
        stock:30,
        price:2000,
        description:'loremjfvnfdsjgnjkfn fjknjgnjksdfng nfnsjsngknskjsg',
        imagen:'../images/nerds.jpg',
        category:'oferta'
    },
    {
        id:'4',
        name:'Palitos de la selva',
        stock:20,
        price:50,
        description:'loremjfvnfdsjgnjkfn fjknjgnjksdfng nfnsjsngknskjsg',
        imagen:'../images/palito.jpg',
        category:'mas vendidos'
    },
    {
        id:'5',
        name:'Skittles',
        stock:5,
        price:4000,
        description:'loremjfvnfdsjgnjkfn fjknjgnjksdfng nfnsjsngknskjsg',
        imagen:'../images/skittles.jpg',
        category:'nuevos'
    }
]

export const getProducts =() => {
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema intente mas tarde')
            }else{
                
                resolve(productos)
            }
        },2000)
    })
}

export const getOneProduct = (id) =>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema')
            }else{
                let product = productos.find((item)=> item.id === id)
                resolve(product)
            }
        }, 5000)
    })
}

