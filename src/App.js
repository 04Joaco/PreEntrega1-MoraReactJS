
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      {/* // realizacion del un navbar con un carrito integrado mediante un cartwidget */}
      <NavBar/>
       {/* Y un greeting implementado en el proyecto */}
      <ItemListContainer greeting={'¡Bienvenido a un mundo de estilo y confort en tu hogar!'} />
    </div>
  );
}

// tengo unas consultas
// No entiendo muy bien como aplicarle estilos propios a los componentes


export default App;
