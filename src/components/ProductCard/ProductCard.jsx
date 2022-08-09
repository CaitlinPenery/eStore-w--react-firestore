import { useState } from "react";
import classes from "./ProductCard.module.scss";
// import Modal from "../Modal/Modal";
import { NavLink } from "react-router-dom";

const ProductCard = ({ data }) => {
    const { title, id, variants } = data;

    const image = data.imageLink
        ? data.imageLink
        : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";

    return (
        <>
            <div className={classes.Card}>
                <div className={classes.Card_Header}>
                    <h2>{title}</h2>
                </div>
                <img className={classes.Card_Image} src={image} alt={title} />
                <div>
                    <div className={classes.Card_Color}>
                        {variants.map((item) => (
                            <div
                                className={classes.Card_Color_Content}
                                key={item}
                                style={{ backgroundColor: `${item}` }}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className={classes.Card_Btns}>
                    <NavLink to={`/product/${id}`}>
                        <button>More Info</button>
                    </NavLink>
                </div>
                {/* Modal not in use */}
                {/* <button onClick={() => setShow(true)}>More Info</button>
                </div>

                <Modal
                    title={`${name} by ${brand}`}
                    onClose={() => setShow(false)}
                    show={show}
                >
                    <img className={classes.Card_Image} src={imageLink} />
                    <p>{description}</p>
                    <p>$ {price}</p>
                </Modal> */}
            </div>
        </>
    );
};

export default ProductCard;
