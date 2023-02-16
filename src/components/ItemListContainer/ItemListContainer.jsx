import { useState,useEffect } from 'react';
import { consultarBDD } from '../../Utils/funciones.js';

import { ItemList } from '../ItemList/ItemList.jsx';
//este componente consulta a la base de datos"BDD" de mis productos y la renderiza
export const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
    useEffect(()=>{
      /*   const consultarDatos= async()=>{

        const prods = await consultarBDD('./json/producto.json')
        console.log(prods)
        }
        // ./ es estar dentro de carpeta publica
       consultarDatos() */
        consultarBDD('./json/productos.json').then(prods =>{
            const items= ItemList({prods})
            setProductos(items)
        })

    },[])
    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    );
}

