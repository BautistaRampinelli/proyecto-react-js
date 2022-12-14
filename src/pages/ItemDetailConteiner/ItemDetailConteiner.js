import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {doc, getDoc, getFirestore} from 'firebase/firestore';


const ItemDetailConteiner = () => {
    const [productSelected, setProductSelected] = useState();
    const {id} = useParams();
    const getProduct = () => {
        const db = getFirestore();
        const query = doc(db, 'items', id);
        getDoc(query)
            .then((res) => {
                setProductSelected({id: res.id, ...res.data()})
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getProduct();
    
    }, [id])
    return (
        <div>
            {productSelected && <ItemDetail productSelected={productSelected} />}
        </div>
    )
}

export default ItemDetailConteiner;