import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// Esto es solo si quiero usar codigo del bootstrap comun
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavBar from './components/navbar/NavBar'
// import NavBarComun from './components/navbar/NavBarComun';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import ComponenteChildren from './components/componenteChildren/ComponenteChildren';

function App() {

  return (

    <div>
      <NavBar/> 
      <ItemListContainer greeting="Bienvenidos a mi app"/>
      <ItemDetailContainer/>

      {/* <ComponenteChildren/>
      <ComponenteChildren>
        <p>Hola</p>
        <p>Chau</p>
      </ComponenteChildren>
      <ComponenteChildren>
        <img src='../images/carrito.png' alt='carrito'/>
      </ComponenteChildren>
      <ComponenteChildren>
       <ItemDetailContainer/>
       <ItemDetailContainer/>
      </ComponenteChildren> */}
    </div>
  );
}

export default App;
