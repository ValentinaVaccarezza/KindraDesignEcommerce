import { BrowserRouter , Route , Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar.jsx';
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer';
/*import {ItemCount} from './componentes/ItemCount/ItemCount';*/
import { CopyRight, Footer } from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>

      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/ItemListContainer/:idCategory" element={ <ItemListContainer /> } />
          <Route path="/item/:idItem" element={ <ItemDetailContainer /> } />
        </Routes>
        <Footer/>
        <CopyRight/>
      </div>

    </BrowserRouter>
  );

}

export default App;
