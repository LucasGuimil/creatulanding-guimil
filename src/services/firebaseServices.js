import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const getProducts = async () => {
    try {
        const productCollection = collection(db,"products")
        const products = await getDocs(productCollection)
        return products.docs.map((doc)=>({id: doc.id, ...doc.data()}))
    }catch (error) {
        throw new Error(`No se pueden obtener los productos. Descripición del error: ${error}`);
    }
}   
export const getProductById = async (id) => {
    try {
        const productDoc = doc(db, "products", id)
        const productById = await getDoc(productDoc)
        return {id: productById.id, ...productById.data()}
    } catch (error) {
        throw new Error(`No se pudo obtener el detalle del producto. Descripición del error: ${error}`);
    }
}

export const getProductsByCategory = async (category) => {
    try {
        const productCollection = collection(db,"products")
        const q = query(productCollection, where('category','==',category))
        const products = await getDocs(q)
        return products.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
    } catch (error) {
        throw new Error(`No se pueden obtener los productos. Descripición del error: ${error}`)
    }
}

export const createOrder = async (newOrder) => {
    try {
        const ordersCollection = collection(db,"orders")
        const orderDetail = await addDoc(ordersCollection, newOrder)
        return orderDetail
    } 
    catch (error) {
        throw new Error(`No se pudo crear la orden. Descripición del error: ${error}`)
    }
}
