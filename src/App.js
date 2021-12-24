import logo from './logo.svg';
import './App.css';
import PruebaRuteo from './PruebaRuteo';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (

    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Chipu the machine</code> / Prueba 99999999.
        </p>
       <a
          className="App-link"
          href="/chipusin"
          target="_blank"
          rel="noopener noreferrer"
        > 
          Gracias Manu bolo
        </a>
      </header>
    </div>
     
  );
}

export default App;
