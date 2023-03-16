import { Link } from "react-router-dom";
export const Cartwidget = ({ cantcarrito }) => {
  return (
    <>
      <Link className="nav-1" to={"/cart"}><button className="btn btn-dark">🛒</button></Link>
      <p>10</p>
    </>
  );
};
