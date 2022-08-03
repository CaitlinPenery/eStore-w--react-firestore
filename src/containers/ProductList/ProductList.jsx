import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
        };
        fetchProducts();
    }, []);

    return (
        <main>
            <h2>Products</h2>
            <section>
                {products.map((product) => (
                    <ProductCard key={product.id} data={product} />
                ))}
            </section>
        </main>
    );
};

export default ProductList;
