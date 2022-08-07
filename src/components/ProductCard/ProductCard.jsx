import React, { useState } from "react";
import classes from "./ProductCard.module.scss";
import Modal from "../Modal/Modal";

const ProductCard = ({ data }) => {
    const { name, brand, imageLink, description, price } = data;

    const [show, setShow] = useState(false);

    const image = data.imageLink
        ? data.imageLink
        : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

    return (
        <>
            <div className={classes.Card}>
                <div>
                    <h2>{name}</h2>
                    <h3>{brand}</h3>
                </div>
                <img className={classes.Card_Image} src={image} alt={name} />
                <div className={classes.Card_Btns}>
                    <button>Buy Now</button>
                    <button onClick={() => setShow(true)}>More Info</button>
                </div>

                <Modal
                    title={`${name} by ${brand}`}
                    onClose={() => setShow(false)}
                    show={show}
                >
                    <img className={classes.Card_Image} src={imageLink} />
                    <p>{description}</p>
                    <p>$ {price}</p>
                </Modal>
            </div>
        </>
    );
};

export default ProductCard;
