import ItemDetailConteiner from "../ItemDetailConteiner/ItemDetailConteiner"

const ItemList = ({productList}) => {
    return (
        <>
            {productList.map((product) => (
                <ItemDetailConteiner key={product.id} producto={product} />
            ))}
        </>
    )
}

export default ItemList