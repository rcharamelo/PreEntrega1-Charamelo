const ItemCount = () => {
    return(
        <>
        <div className="contactForm">
            <h3 className="formTitle">Poster Paisaje</h3><hr/>
            <img src="../../public/micamino200x200.jpg"/>
            <div className="divStyle">
                <button className="button">-</button>
                <button className="button">0</button>
                <button className="button">+</button>
            </div>
            <button className="comprar">Agregar al carrito</button>
        </div>
        </>
    )
}
export default ItemCount;