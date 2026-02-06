import { useMemo } from "react"
import { useState } from "react"
import './ProductFilter.css';

function ProductFilter() {
    // Khởi tạo 5000 sản phẩm
    const initProducts = () => {
        const products = [];
        for (let i = 1; i <= 5000; i++) {
            products.push({
                id: i,
                name: `Product ${i}`,
                price: Math.floor(Math.random() * 1000) + 1
            });
        }

        return products;
    }

    const MOCK_ARRAY = initProducts();

    // state
    const [products, setProducts] = useState(MOCK_ARRAY);
    const [searchText, setSearchText] = useState('');
    const [minPrice, setMinPrice] = useState(0);

    // useMemo lọc sản phẩm
    const filterProducts = useMemo(() => {
        const resultProducts = products.filter(p => {
            return p.name.toLowerCase().includes(searchText.toLowerCase()) && p.price >= minPrice;
        })
        return resultProducts;
    }, [products, searchText, minPrice]); // Chỉ lọc lại mảng khi products, searchText hoặc minPrice thay đổi

    // Sau khi lọc sản phẩm => Tính tổng 
    const totalPrice = useMemo(() => {
        return filterProducts.reduce((total, product) => total + product.price, 0);
    }, [filterProducts]); // chỉ tính tổng lại khi mảng lọc (filterProducts) thay đổi


    // Render component
    return (
        <div className="product-filter">
            <h2>Sau khi lọc được: {filterProducts.length} sản phẩm</h2>
            <input type="text" placeholder="Tìm tên..." value={searchText} onChange={(e) => setSearchText(e.target.value)} /> <br />
            <input type="number" placeholder="Giá từ..." value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} /> <br />

            <h3>Tổng giá: {totalPrice.toLocaleString('vi-VN')} đ</h3>

            <ul className="product-list">
                {filterProducts.slice(0, 20).map(p => ( 
                    <li key={p.id}>
                        {p.name} - <strong>{p.price}$</strong>
                    </li>
                ))}
                {filterProducts.length > 20 && <li>... và còn nhiều nữa</li>}
            </ul>
        </div>
    )
}

export default ProductFilter;