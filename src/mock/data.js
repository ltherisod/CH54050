

export const productos = [
    
    {
      
        name:'random2',
        category:'mas vendidos',
        description:'lorem ipfnjkfnjsnefjknskef',
        price:150,
        img:'https://picsum.photos/201',
        stock:15
    },
    {
       
        name:'random3',
        category:'ofertas',
        description:'lorem ipfnjkfnjsnefjknskef',
        price:10,
        img:'https://picsum.photos/203',
        stock:5
    },
    {
     
        name:'random4',
        category:'ofertas',
        description:'lorem ipfnjkfnjsnefjknskef',
        price:25000,
        img:'https://picsum.photos/204',
        stock:25
    },
    {
    
        name:'random5',
        category:'nuevos',
        description:'lorem ipfnjkfnjsnefjknskef',
        price:280,
        img:'../images/ejemplo.png',
        stock:20
    },

]

//funcion de todos los productos.
export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No hay data')
            }else{
                resolve(productos)
            }
        },2000)
    })
}

//funcion del detalle

export const getOneProduct = (id) =>{
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if(error){
                reject('No existe ese prod')
            }else{
                let oneProduct = productos.find((prod)=> prod.id === id)
                resolve(oneProduct)
            }
        },2000)
    })
}