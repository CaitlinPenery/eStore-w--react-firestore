import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductsById } from "../../services/products";
import { quantityWatchCount } from "../../services/products";
import classes from "./ProductPage.module.scss";

const ProductPage = () => {
    const { id } = useParams();
    // const navigate = useNavigate(); Navigate to Home or Cart when Add to cart clicked
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [decrement, setDecrement] = useState();
    const [disable, setDisable] = useState(false);

    // useEffect(() => {
    //     getProductsById(id)
    //         .then(setProduct)
    //         .finally(() => setLoading(false));
    // }, [id]);

    useEffect(() => {
        const wrapper = async () => {
            const product = await getProductsById(id);
            setProduct(product);
            setLoading(false);
        };

        wrapper();
    }, [decrement, id]);

    const onWatchButtonClick = async (id, quantity) => {
        await quantityWatchCount(id, quantity);
        if (quantity <= 1) {
            setDisable(true);
        } else;
        setDecrement(quantity);
    };

    return (
        <div className={classes.Product}>
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
                            onWatchButtonClick(product.id, product.quantity);
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
