import { Link } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";

export const Item = ({item}) => {

    const {darkMode}= useDarkModeContext()
    console.log(darkMode)
    return (
        <div className="card mb3 cardPoducto border-primary" >
            <img src={item.img} className="card-img-top" alt={`imagen de ${item.combre} `}/>
            <div className={`div card-body ${darkMode ? 'cardBodyDark': 'cardBodyDark'}`}>
                <h5 className="card-title">{item.nombre} {item.marca}</h5>
                <p className="card-text"> ${item.precio}</p>
                <Link className="nav-link" to={`/item/${item.id}`}><button className="btn btn-primary">Ver producto</button></Link> 
                
            </div>
            
        </div>
    );
}

