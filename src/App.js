import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// Esto es solo si quiero usar codigo del bootstrap comun
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavBar from './components/navbar/NavBar'
// import NavBarComun from './components/navbar/NavBarComun';
import ItemListContainer from './components/itemListContainer/ItemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cart from './components/cart/Cart';
function App() {

  return (
    <BrowserRouter>
      <NavBar/> 
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting="Bienvenidos a mi app"/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<h2>404: No existe</h2>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
