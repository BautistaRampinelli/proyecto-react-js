import Navbar from './components/Navbar/Navbar';
import ItemsListContainer from './pages/ItemsListContainer/ItemsListContainer';
import ItemDetailConteiner from './pages/ItemDetailConteiner/ItemDetailConteiner';


import './App.css';
import './components/Navbar/Navbar.css';
import './pages/ItemsListContainer/ItemsListContainer.css';
import './pages/ItemDetailConteiner/ItemDetailConteiner.css';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import Cart from './pages/Cart/Cart';
import CartProvider from './context/CartProvider';
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemsListContainer/>} />
          <Route path='/categoria/:categoryName' element={<ItemsListContainer/>} />
          <Route path='detail/:id' element={<ItemDetailConteiner/>} />
          <Route path='cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}


export default App;
