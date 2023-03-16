

export const ItemCart = ({item}) => {
    return (
        <div className="carb mb-3 cardCart">
                <div className="row-g-0">
                   <div className="col-md4">
                        <img src={item.img} alt={`imagen de ${item.nombre}`}className="img-fluid" />                  
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                            <p className="cart-text">Cantidad: {item.cant}</p>
                            <p className="cart-text">Precio Unitario: {item.precio}</p>
                            <p className="cart-text">Subtotal: {item.cant* item.precio}</p>
                            <button className="btn btn-danger" onClick={()=> console.log("producto eliminado")}>Eliminar del Carrito</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}



