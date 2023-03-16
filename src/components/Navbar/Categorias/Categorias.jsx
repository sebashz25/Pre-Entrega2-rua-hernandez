import { Link } from "react-router-dom";
import React from "react";
export const Categorias = React.memo(() => {
  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">
        <button className="btn btn-dark">Categorias</button>
        Dropdown
      </a>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to= {'/category/1'}>proteinas</Link></li>
        <li><Link className="dropdown-item" to= {'/category/2'}>capsulas</Link></li>
        <li><Link className="dropdown-item" to= {'/category/3'}>plantas</Link></li>
        <li><Link className="dropdown-item" to= {'/category/4'}>creatinas</Link></li>
      </ul>
       <div className="dropdown-menu">
        <a className="dropdown-item" href="/">
          proteinas
        </a>
        <a className="dropdown-item" href="/">
          plantas
        </a>
        <a className="dropdown-item" href="/">
          homeopatico
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item" href="/">
          capsulas
        </a>
      </div> 
    </li>
  );
})
