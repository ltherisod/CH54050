export const productosData = [
 
    {
      
        name:'Nerds',
        stock:30,
        price:2000,
        description:'loremjfvnfdsjgnjkfn fjknjgnjksdfng nfnsjsngknskjsg',
        imagen:'../images/nerds.jpg',
        category:'oferta'
    },
    {
       
        name:'Palitos de la selva',
        stock:20,
        price:50,
        description:'loremjfvnfdsjgnjkfn fjknjgnjksdfng nfnsjsngknskjsg',
        imagen:'../images/palito.jpg',
        category:'mas vendidos'
    },
    {
       
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
                
                resolve(productosData)
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
                let product = productosData.find((item)=> item.id === id)
                resolve(product)
            }
        }, 5000)
    })
}

