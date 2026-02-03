import './ProductList.css'

function ProductList(props) {
    return (
        <div className="products">
            {props.product.map((p, index) => (
                <div className="card" key={index}>
                    <img src={p.image} alt={p.name} />
                    <h3>{p.name}</h3>
                    <p>{p.price}$</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList