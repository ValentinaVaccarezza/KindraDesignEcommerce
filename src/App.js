import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar.jsx';
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer';
import { CopyRight, Footer } from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './componentes/Cart/Cart';
import { CartContextProvider } from './Context/CartContext';
import Contacto from "./componentes/NavBar/Contacto/Contacto";




function App() {

  return (
    <CartContextProvider>
    <BrowserRouter>

      <div className="App">
        <NavBar/>
        
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
          <Route path="/item/:idItem" element={ <ItemDetailContainer /> } />
          <Route path="/Cart" element={ <Cart /> } />
          <Route path="/Contacto" element={ <Contacto /> }/>
          <Route path='/*' element={ <Navigate to= '/' replace /> } />
        </Routes>
        <Footer/>
        <CopyRight/>
      </div>

    </BrowserRouter>

    </CartContextProvider>
  );

}

export default App;

