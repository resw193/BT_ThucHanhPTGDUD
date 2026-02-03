import anh from '../../../assets/img/bai1buoi1.jpg'
import './ProductCard.css'

function ProductCard() {
    return (
        <div className="product-card">
            <div>
                <img src={anh} alt="Sản phẩm" className="product-img"/>
            </div>
            
            <div className="product-info">
                <h2 className="product-title">Tên sản phẩm</h2>
                <p className="product-price">Giá: 20000</p>
            </div>

            <button className="product-btn">Add to cart</button>
        </div>
    )
}

export default ProductCard