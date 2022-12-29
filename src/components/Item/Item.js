import { Link } from "react-router-dom";
import './Item.css'

const Item = ({product}) => {
    return (
        <Link to={`detail/${product.id}`}>
            <div className="divItem">
                <img className="imgItem" alt={product.title} src={`assets/${product.imageId}`} />
                <h2 className="titleItem">{product.title}</h2>
                <h2 className="descriptionItem">{product.description}</h2>
                <h2 className="priceItem">${product.price}</h2>
                <h2 className="stockItem">Quedan {product.stock} productos</h2>
            </div>
        </Link>
    )
}

export default Item;