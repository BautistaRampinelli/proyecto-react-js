import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { 
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';


const ItemsListContainer = () => {

  const[productList, setProductList] = useState([]);
  const {categoryName} = useParams();

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, 'items');
    if (categoryName) {
      const queryFilter = query(
        querySnapshot,
        where('categoryId', '==', categoryName)
      );
      getDocs(queryFilter)
        .then((response) => {
          const data = response.docs.map((item) => {
            return { id: item.id, ...item.data()};
          });
          setProductList(data)
        })
        .catch((error) => {
          console.log(error);
        })
    } else {
      getDocs(querySnapshot)
        .then((response) => {
          const data = response.docs.map((item) => {
            return { id: item.id, ...item.data()};
          });
          setProductList(data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }


  useEffect(() => {
    getProducts();
  }, [categoryName]);

  return <div><ItemList productList={productList} /></div>
}

export default ItemsListContainer