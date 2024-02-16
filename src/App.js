import './App.css'

function App() {
  return (
    <div>
          <nav className='navContainer'>
            <a className='link' href="/">CoderApp</a>
            <div className='linksContainer'>
              <a className='link' href="/">Nuevos</a>
              <a className='link' href="/">Mas vendidos</a>
              <a className='link'  href="/">Ofertas</a>
            </div>
            <img className='cartWidget' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpamj_kQJs_Jcru_njDODfNE1thUfSNjomH9juIEoMHi4jlGdHyXaN39seojZHrq8S-MQ&usqp=CAU'/>
          </nav>
    </div>
  );
}

export default App;
