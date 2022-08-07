import { Component } from "react";
import Slider from "react-slick";
import classes from "./resultCarousel.module.scss";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import ResultsCard from "../ResultsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAPI } from "../../context/context";

const ResultCarousel = () => {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const products = await getProducts();
    //         setProducts(products);
    //     };
    //     fetchProducts();
    // }, []);
    const settings = {
        dots: false,
        infinate: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    const { products } = useAPI();
    return (
        <div className={classes.slider}>
            <div className={classes.slider_title}>
                <h1>Favourate Items</h1>
            </div>

            <div className={classes.slider_container}>
                <Slider {...settings}>
                    {products
                        .filter((favourite) => favourite.favourited === false)
                        .map((product) => (
                            <div key={product.id}>
                                <ResultsCard data={product} />
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    );
};

export default ResultCarousel;
