import { Component } from "react";
import Slider from "react-slick";
import classes from "./resultCarousel.module.scss";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import ProductCard from "../ProductCard/ProductCard";

const ResultCarousel = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
        };
        fetchProducts();
    }, []);

    const settings = {
        dots: true,
        infinate: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 4,
        slidesToScroll: 3,
        focusOnSelect: true,
        pauseOnDotsHover: true,
        pauseOnHover: true,
        className: "slides",
    };

    return (
        <Slider {...settings}>
            {products
                .filter((favourite) => favourite.favourited === true)
                .map((product) => (
                    <div className={classes.wrapper} key={product.id}>
                        <ProductCard
                            className={classes.sliderImg}
                            data={product}
                        />
                    </div>
                ))}
        </Slider>
    );
};

export default ResultCarousel;
