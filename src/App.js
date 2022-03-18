import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar.jsx';
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer';
/*import {ItemCount} from './componentes/ItemCount/ItemCount';*/
import { CopyRight, Footer } from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { Cart } from './componentes/CartWidget/CartWidget';

function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
          <Route path="/item/:idItem" element={ <ItemDetailContainer /> } />
          <Route path="/CartWidget" element={ <Cart /> } />
          <Route path='/*' element={ <Navigate to= '/' replace /> } />
        </Routes>
        <Footer/>
        <CopyRight/>
      </div>

    </BrowserRouter>
  );

}

export default App;
