import './App.css';
import Navbar from './Componentes/js/Navbar';
import Avatar from './Componentes/js/Avatar';
import CarritoCompras from './Componentes/js/CarritoCompras';


function App() {
  return (
    <div className='App'>
      <div>
        <Avatar />
      </div>
      <div className='navBar'>
        <Navbar />
      </div>
      <div>
        <CarritoCompras />
      </div>
    </div>
  );
}

export default App;
