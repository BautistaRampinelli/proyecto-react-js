import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
        <Link to={`detail/${product.id}`}>
            <div>
                <img alt={product.title} src={`assets/${product.imageId}`} />
                <h2>{product.title}</h2>
                <h2>{product.description}</h2>
                <h2>${product.price}</h2>
                <h2>Quedan {product.stock} productos</h2>
            </div>
        </Link>
    )
}

export default Item