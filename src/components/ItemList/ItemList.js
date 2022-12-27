import Item from "../Item/Item"

const ItemList = ({productList}) => {
    return productList.map( (product) => <Item product={product} key={product.id}/>);
}

export default ItemList