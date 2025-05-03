import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const getProducts = async () => {
    const productCollection = collection(db,"products")
    const products = await getDocs(productCollection)
    return products.docs.map((doc)=>({id: doc.id, ...doc.data()}))
}