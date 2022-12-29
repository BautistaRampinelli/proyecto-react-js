import { useEffect, useContext, useState } from "react";
import moment from "moment/moment";
import { cartContext } from "../../context/CartProvider";
import {collection, addDoc, updateDoc, doc, getFirestore} from 'firebase/firestore'
import './Cart.css'

const Cart = () => {
    const {cart} = useContext(cartContext)
    const [total, setTotal] = useState(0)
    const [formValues, setFormValues] = useState({ name:'', phone: '', email:''})
    
    const getTotalPrice = () => {
        setTotal(
            cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
        )
    }

    const createOrder = () => {
        const db = getFirestore();
        const query = collection (db, 'order');
        const newOrder = {
            buyer: {
                name:formValues.name,
                phone: formValues.phone,
                email: formValues.email,
            },
            date: moment().format('DD/MM/YYYY'),
            items: cart,
            total: total,
        }
        addDoc (query, newOrder)
        .then((res) => {
            alert(`Orden creada con el id ${res.id}`)
            return res
        })
        .then((response) => {
            cart.forEach((product) => {
                const query = doc(db, 'items', product.id)
                updateDoc(query, {
                    stock: product.stock - product.quantity,
                })
            })
        })
        .catch ((error) => console.log(error))
    }
    useEffect(() => {
        getTotalPrice();
    }, [cart])

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues, [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <div className="divFormCart">
                    <h2 className="titleFormCart">Formulario</h2>
                    <input name="name" text="text" placeholder="Nombre" value={formValues.name} onChange={handleInputChange}/>
                    <input name="phone" text="text" placeholder="Teléfono" value={formValues.phone} onChange={handleInputChange}/>
                    <input name="email" text="text" placeholder="Email" value={formValues.email} onChange={handleInputChange}/>
                </div>
            {cart.map((product) => (
                <div className="divProductCart" key={product.id}>
                    <img className="imgProductCart" alt={product.title} src={`/assets/${product.imageId}`}/>
                    <h2 className="titleProductCart">{product.title}</h2>
                    <h2 className="priceProductCart">${product.price}</h2>
                    <h2 className="quantityProductCart">Cantidad: {product.quantity}</h2>
                </div>
            ))}
            <div className="divOrderCart">
                <h1 className="totalCart">Total: ${total}</h1>
                <button className="btnCreateOrder" onClick={createOrder}>CREAR ORDEN</button>
                
            </div>
        </div>
    )
}

export default Cart