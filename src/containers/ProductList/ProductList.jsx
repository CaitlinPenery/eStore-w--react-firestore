import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import classes from "./ProductList.module.scss";
import { useAPI } from "../../context/context";

const ProductList = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const products = await getProducts();
    //         setProducts(products);
    //     };
    //     fetchProducts();
    // }, []);

    const { products } = useAPI();

    return (
        <main className={classes.container}>
            <div className={classes.container_title}>
                <h2>Products</h2>
            </div>
            <section className={classes.container_cards}>
                {products.map((product) => (
                    <div key={product.id}>
                        <ProductCard data={product} />
                    </div>
                ))}
            </section>
        </main>
    );
};

export default ProductList;
