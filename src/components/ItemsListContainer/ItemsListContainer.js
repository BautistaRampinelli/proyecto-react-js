import { useEffect } from "react";
import { useState } from "react"
import { useParams } from "react-router-dom";
import { data } from "../../data/data"
import ItemList from "../ItemList/ItemList";

const ItemsListContainer = () => {
  const[productList, setProductList] = useState([]);

  const {categoria} = useParams();
console.log(categoria);
  const getProducts = new Promise((res, rej) => {
    setTimeout(() => {
      if (categoria) {
        const filteredData = data.filter((product) => {
          return product.categoria === categoria;
        });
        res(filteredData);
      } else {
        res(data);
      }
    }, 2000);
  });

  useEffect(() => {
    getProducts.then((response) => {
      setProductList(response);
    });
    // setTimeout(() => {
    //   console.log(productList);
    // }, 4000)
  }, [categoria]);

  return <div><ItemList productList={productList} /></div>
}

export default ItemsListContainer