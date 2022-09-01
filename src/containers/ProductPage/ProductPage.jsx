import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    cartQtyWatchCount,
    createCartItem,
    getCartById,
    getProductsById,
    quantityWatchCount,
    updateCart,
} from "../../services/products";

import classes from "./ProductPage.module.scss";

// ToDo
// Create pop up with choice to goto cart or continue shopping.
// Change db data to link qty with varient
// Use useEffect and useState to link varient and qty
// Local storage for qty change when added to cart, only -
// remove from db when actually purchased

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [decrement, setDecrement] = useState();
    const [disable, setDisable] = useState(false);
    const [cartItem, setCartItem] = useState(null);
    const [cart, setCart] = useState(null);
    const [increment, setIncrement] = useState(null);

    useEffect(() => {
        const fetchCart = async () => {
            const cart = await getCartById(id);
            setCart(cart);
        };
        fetchCart();
    }, [increment, id]);

    useEffect(() => {
        const wrapper = async () => {
            const product = await getProductsById(id);
            setProduct(product);
            setLoading(false);
            setCartItem(product);
        };

        wrapper();
    }, [decrement, id]);
    // Change product qty and add to cart
    // Need to set ID to product ID and update if product ID already exists in cart.
    const onWatchButtonClick = async (id, quantity) => {
        await quantityWatchCount(id, quantity);
        if (quantity <= 1) {
            setDisable(true);
        } else;
        setDecrement(quantity);

        if (cart.title === undefined) {
            createCartItem(cartItem);
        } else updateCart(id, cart.quantity);
        setIncrement(cart.quantity);
    };

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div className={classes.Product_Container}>
                    <h1 className={classes.Product_Title}>{product.title}</h1>
                    <p className={classes.Product_Price}>${product.price}</p>
                    <img
                        className={classes.Product_Image}
                        src={product.imageLink}
                        alt={product.title}
                    />
                    <p className={classes.Product_Desc}>
                        {product.description}
                    </p>

                    <select className={classes.Product_Drop}>
                        <option value="1">Select Colour</option>
                        {product.variants.map((item) => (
                            <option key={item}>{item}</option>
                        ))}
                    </select>

                    <p className={classes.Product_Qty}>
                        Quantity: {product.quantity}
                    </p>
                    <button
                        className={classes.Product_Btn}
                        disabled={disable}
                        onClick={() => {
                            onWatchButtonClick(
                                product.id,
                                product.quantity,
                                cart.quantity
                            );
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            )}
        </>
    );
};

export default ProductPage;
