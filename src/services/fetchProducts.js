import {products} from "../services/products"

export function fetchProducts() {
    return new Promise((resolve)=>  {
        setTimeout(()=> {
            resolve(products)
        },2000)
    })
}

export function fetchProductById(id) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products.find(product => product.id === parseInt(id)))
        },2000)
    })
}

export function fetchProducstByCategory(category) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(products.filter(product => product.category === category))
        },2000)
    })
}
