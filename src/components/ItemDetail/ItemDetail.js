import { useState, useContext } from "react";
import {cartContext} from '../../context/CartProvider';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({productSelected}) => {
    const [count, setCount] = useState(1);
    const {cart, addToCart} = useContext(cartContext);

    return (
        <div className="divItemDetail">
            <h1>Cantidad de productos en tu carrito: {cart.length} </h1>
            <img className="imgItemDetail" alt={productSelected.title} src={`/assets/${productSelected.imageId}`} />
            <h2 className="titleItemDetail">{productSelected.title}</h2>
            <h2 className="descriptionItemDetail">{productSelected.description}</h2>
            <h2 className="priceItemDetail">${productSelected.price}</h2>
            <h2 className="countItemDetail">Cantidad: {count}</h2>
            <ItemCount setCount={setCount}/>
            <button className="btnItemDetail" onClick={() => addToCart(productSelected, count)}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemDetail