import './App.css'
import Navbar from './components/navbar/Navbar'
import { ItemListContainer } from './components/itemListContainer/ItemListContainer'
function App() {
  const saludo='Hola chicos!'
  const testObj={
    name:'Laura',
    lastName:'Therisod'
  }
  return (

    <div>
        <Navbar/>
        <ItemListContainer greeting='Bienvenidos a mi app' saludo={saludo} testObj={testObj}/>
    </div>
  );
}

export default App;
