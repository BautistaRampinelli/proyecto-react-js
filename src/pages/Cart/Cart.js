import { useEffect, useContext, useState } from "react";
import moment from "moment/moment";
import { cartContext } from "../../context/CartProvider";
import {collection, addDoc, updateDoc, doc, getFirestore} from 'firebase/firestore'

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
            {cart.map((product) => (
                <div key={product.id}>
                    <img alt={product.title} src={`/assets/${product.imageId}`}/>
                    <h2>{product.title}</h2>
                    <h2>${product.price}</h2>
                    <h2>Cantidad disponible: {product.quantity}</h2>
                </div>
            ))}
            <div>
                <h1>Total: {total}</h1>
                <button onClick={createOrder}>Crear orden</button>
                <div>
                    <h2>Formulario</h2>
                    <input name="name" text="text" placeholder="Nombre" value={formValues.name} onChange={handleInputChange}/>
                    <input name="phone" text="text" placeholder="Teléfono" value={formValues.phone} onChange={handleInputChange}/>
                    <input name="email" text="text" placeholder="Email" value={formValues.email} onChange={handleInputChange}/>
                </div>
            </div>
        </div>
    )
}

export default Cart