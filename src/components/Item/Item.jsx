export const Item = ({item}) => {
    return (
        <div className="card mb3 cardPoducto border-light" >
            <img src={`./img/${item.img}`} className="card-img-top" alt={`imagen de ${item.combre} `}/>
            <div className="div card-body cardBody">
                <h5 className="card-title">{item.nombre} {item.marca}</h5>
                <p className="card-text"> ${item.precio}</p>
                <button className="btn btn-dark">Ver producto</button> 
                
            </div>
            
        </div>
    );
}

