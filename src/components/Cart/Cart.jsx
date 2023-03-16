import { Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
export const Cart = () => {
    const carrito=[
      {
        "id": 3,"idCategoria": 3,"nombre": "Castaño De Indias","marca": "Milelliun","precio": 40000,"stock": 15,"img": "https://firebasestorage.googleapis.com/v0/b/renueva-tu-salud-46586.appspot.com/o/casta%C3%B1o.jpg?alt=media&token=156051a4-7dcc-4568-81ea-039e9f9c8ecd"
    },
    {
        "id": 3, "idCategoria": 3,"nombre": "Castaño De Indias", "marca": "Milelliun", "precio": 40000,"stock": 15, "img": "https://firebasestorage.googleapis.com/v0/b/renueva-tu-salud-46586.appspot.com/o/casta%C3%B1o.jpg?alt=media&token=156051a4-7dcc-4568-81ea-039e9f9c8ecd"
    },
    {
        "id": 3,"idCategoria": 3,"nombre": "Castaño De Indias", "marca": "Milelliun", "precio": 40000, "stock": 15,"img": "https://firebasestorage.googleapis.com/v0/b/renueva-tu-salud-46586.appspot.com/o/casta%C3%B1o.jpg?alt=media&token=156051a4-7dcc-4568-81ea-039e9f9c8ecd"
    },  
    ]
    const carrito2=[]
    return (
        <>
            {
            carrito.length ===0
            ?// si no existen productos en el carrito
            <>
                <h2>carrito vacio</h2>
                <Link className="nav-link" to= {"/"}><button className="bnt bnt-primary">continuar comprando</button></Link>
            </>
            ://si existen productos en el carrito
             <div className="container cartContainer">
                <ItemList prods={carrito} plantilla ="ItemCart"/>
                <div className="divButtons">
                    <p>Resumen de la compra: PrecioTotal</p>
                    <button className="btn btn-danger" onClick={()=> console.log("Productos eliminados")}>Vaciar Carrito</button>
                    <Link className="nav-link" to= {"/"}><button className="btn btn-dark"> Continuar Comprando</button ></Link>
                     <Link className="nav-link" to= {"/checkout"}><button className="btn btn-dark"> Finalizar Compra</button ></Link>
                </div>
            </div>
            }
        </>
    );
}

 
