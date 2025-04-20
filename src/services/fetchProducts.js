import {products} from "../services/products"

export default function fetchProducts() {
    return new Promise((resolve,reject)=>  {
        setTimeout(()=> {
            resolve(products)
        },1500)
    })
}
