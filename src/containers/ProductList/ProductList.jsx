import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import ResultCarousel from "../../components/ResultCarousel/resultCarousel";

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
            <section></section>
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
