import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { consultarBDD } from '../../Utils/funciones.js';

import { ItemList } from '../ItemList/ItemList.jsx';
//este componente consulta a la base de datos"BDD" de mis productos y la renderiza
export const ItemListContainer = () => {
    const {idCategoria} = useParams()
    const [productos,setProductos] = useState([])
    console.log(idCategoria)
   
    useEffect(()=>{
        if (idCategoria) {
            
        consultarBDD('../json/productos.json').then(products =>{ 
            const prods= products.filter(prod => prod.idCategoria === parseInt(idCategoria))
            const items= <ItemList prods={prods} plantilla ="Item"/>
            setProductos(items)
        })
        }else{
            
        consultarBDD('./json/productos.json').then(prods =>{
            const items= <ItemList prods={prods} plantilla ="Item"/>
            setProductos(items)
        })
        }

    }, [idCategoria])
    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    );
}

