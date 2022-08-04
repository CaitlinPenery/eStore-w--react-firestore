import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./ProductCard.module.scss";

function ProductCard({ data }) {
    const { id, name, brand, imageLink } = data;

    return (
        <div className={classes.Card}>
            <h2>{name}</h2>
            <h3>{brand}</h3>
            <img
                className={classes.Card_Image}
                src={imageLink}
                alt={name + brand}
            />
            <NavLink className={classes.Card_Link} to={`/users/${id}`}>
                More Info
            </NavLink>
        </div>
    );
}

export default ProductCard;
