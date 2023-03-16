import "./App.css";
import 'react-toastify/dist/ReactToastify.css';


import { BrowserRouter, Routes, Route } from "react-router-dom";


import { DarkModeProvider } from "../context/DarkModeContext";

import { cargarBDD } from "../Utils/firebase";


import { ToastContainer } from 'react-toastify';

//componentes
import { Navbar } from "./Navbar/Navbar";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./ItemDetailContainer/ItemDetailContainer";
import { Checkout } from "./Checkout/Checkout";
import { Cart } from "./Cart/Cart";
export const App = () => {
  cargarBDD()
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar nombre={"Renueva Tu Salud"} />    
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/> 
            <Route path='/checkout' element={<Checkout/>}/>   
            <Route path='/Cart' element    ={<Cart/>}/>
          </Routes>  
        <ToastContainer/> 
        </DarkModeProvider>
             
      </BrowserRouter>      
    </>
  );
};
