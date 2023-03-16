import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDafsr6r6oUSThSfWIVRVWi7CvGT-b_wqU",
  authDomain: "renueva-tu-salud-46586.firebaseapp.com",
  projectId: "renueva-tu-salud-46586",
  storageBucket: "renueva-tu-salud-46586.appspot.com",
  messagingSenderId: "93788047686",
  appId: "1:93788047686:web:21ad86a564d1ccb354fd47"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore() //referencia  a mi base de datos

/*
    CRUD  PRODUCTOS
    CREATE
    READE
    UPDATE
    DELETE
*/

  export const cargarBDD = async() =>{
    const promise= await fetch('./json/productos.json')
    const productos= await promise.json()
    productos.forEach(async(prod) => {
        await addDoc(collection(db, "productos"),{// colletion si existe productos, lo consulta si no lo crea y lo consulta
            idCategoria: prod.idCategoria,
            nombre: prod.nombre,
            marca: prod.marca,
            precio: prod.precio,            
            stock: prod.stock,            
            Img: prod.img,
            modelo:prod.modelo
        })
    })

} 

/* export const getProductos= async()=>{
    const productos= await getDocs(collection(db, "productos"))
    const items= productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    console.log(items)
}  */