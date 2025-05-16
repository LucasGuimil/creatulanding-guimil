import { addDoc, collection, doc, getDoc, getDocs, increment, query, updateDoc, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const getProducts = async () => {
    try {
        const productCollection = collection(db,"products")
        const products = await getDocs(productCollection)
        return products.docs.map((doc)=>({id: doc.id, ...doc.data()}))
    }catch (error) {
        throw new Error(`No se pueden obtener los productos. Descripción del error: ${error}`);
    }
}   
export const getProductById = async (id) => {
    try {
        const productDoc = doc(db, "products", id)
        const productById = await getDoc(productDoc)
        return {id: productById.id, ...productById.data()}
    } catch (error) {
        throw new Error(`No se pudo obtener el detalle del producto. Descripción del error: ${error}`);
    }
}

export const getProductsByCategory = async (category) => {
    try {
        const productCollection = collection(db,"products")
        const q = query(productCollection, where('category','==',category))
        const products = await getDocs(q)
        return products.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
    } catch (error) {
        throw new Error(`No se pueden obtener los productos. Descripción del error: ${error}`)
    }
}

export const createOrder = async (newOrder) => {
    try {
        const ordersCollection = collection(db,"orders")
        const orderDetail = await addDoc(ordersCollection, newOrder)
        return orderDetail
    } 
    catch (error) {
        throw new Error(`No se pudo crear la orden. Descripción del error: ${error}`)
    }
}

export const updateStock = async (id, quantity) => {
        try {
            const producToUpdateDoc = doc(db,"products",id)
            const productUpdate = await updateDoc(producToUpdateDoc, {stock: increment(-quantity)})
            return productUpdate
        } catch (error) {
            throw new Error(`No se pudo actualizar el stock del documento. Descripción del error: ${error}`);
        }
    }
