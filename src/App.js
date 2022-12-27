import Navbar from './components/Navbar/Navbar';
import ItemsListContainer from './pages/ItemsListContainer/ItemsListContainer';
import ItemDetailConteiner from './pages/ItemDetailConteiner/ItemDetailConteiner';


import './App.css';
import './components/Navbar/Navbar.css';
import './pages/ItemsListContainer/ItemsListContainer.css';
import './pages/ItemDetailConteiner/ItemDetailConteiner.css';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemsListContainer/>} />
        <Route path='/categoria/:categoria' element={<ItemsListContainer/>} />
        <Route path='detail' element={<ItemDetailConteiner/>} />
        <Route path='cart' element={<CartWidget/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
