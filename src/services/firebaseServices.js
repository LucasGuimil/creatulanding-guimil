import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const getProducts = async () => {
    const productCollection = collection(db,"products")
    const products = await getDocs(productCollection)
    return products.docs.map((doc)=>({id: doc.id, ...doc.data()}))
}

export const getProductById = async (id) => {
    const productDoc = doc(db, "products", id)
    const productById = await getDoc(productDoc)
    return {id: productById.id, ...productById.data()}
}

export const getProductsByCategory = async (category) => {
    const productCollection = collection(db,"products")
    const q = query(productCollection, where('category','==',category))
    const products = await getDocs(q)
    return products.docs.map((doc)=> ({id: doc.id, ...doc.data()}))
}

export const createOrder = async (newOrder) => {
    try {
        const ordersCollection = collection(db,"orders")
        const orderDetail = await addDoc(ordersCollection, newOrder)
        return orderDetail
    } 
    catch (error) {
        console.error(error)
        throw new Error
    }
}