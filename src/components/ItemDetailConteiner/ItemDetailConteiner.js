

const ItemDetailConteiner = ({producto}) => {
    return (
        <div>
            <div className="itemConteiner">
                <img className="imgProduct" alt={producto.nombre} src={`assets/${producto.img}.jpg`}/>
                <h2>{producto.nombre}</h2>
                <p>{producto.info}</p>
                <h3>${producto.precio}</h3>
                <button>COMPRAR</button>
            </div>
        </div>
    )
}

export default ItemDetailConteiner