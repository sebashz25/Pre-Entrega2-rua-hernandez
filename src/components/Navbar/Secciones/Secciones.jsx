import { Link } from "react-router-dom";
import React from "react";
export const Secciones = React.memo(() => {
  return (
    <>
      <li className="nav-item">
        <Link className="nav link"><button className="btn btn-dark">home</button></Link>
      </li>
      
    </>
  );
})
