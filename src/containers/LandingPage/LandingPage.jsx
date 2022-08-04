import { Component } from "react";

import ProductList from "../ProductList/ProductList";
import classes from "./LandingPage.module.scss";
import ResultCarousel from "../../components/resultCarousel/resultCarousel";

const LandingPage = () => {
    return (
        <>
            <ResultCarousel />
            <ProductList />
        </>
    );
};

export default LandingPage;
