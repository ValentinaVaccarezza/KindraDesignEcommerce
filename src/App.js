import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar.jsx';
import {ItemListContainer} from './componentes/ItemListContainer/ItemListContainer';
import {ItemCount} from './componentes/ItemCount/ItemCount';
import { CopyRight, Footer } from './componentes/Footer/Footer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer mensaje='HolaMundo'/>
      <ItemCount/>
      <ItemDetailContainer />
      <Footer/>
      <CopyRight/>
    </div>
  );
}

export default App;
