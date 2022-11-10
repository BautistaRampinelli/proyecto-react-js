import Navbar from './components/Navbar/Navbar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';

import './App.css';
import './components/Navbar/Navbar.css'
import './components/ItemsListContainer/ItemsListContainer.css'
function App() {
  return (
    <div className='conteiner-page' >
      <Navbar/>
      <ItemsListContainer name="Bienvenido/a al lugar donde encontras todo lo que necesitas para tu hogar"/>
    </div>
  );
}

export default App;
