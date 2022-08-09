import classes from "./global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "./containers/PageWrapper";
import Nav from "./components/Nav/";
import { dataInit } from "./services/data";

import ShoppingCart from "./containers/ShoppingCart/ShoppingCart";
import LandingPage from "./containers/LandingPage/LandingPage";
import ProductPage from "./containers/ProductPage/ProductPage";

export const App = () => {
    return (
        <PageWrapper>
            <>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                        <Route path="/cart" element={<ShoppingCart />} />
                    </Routes>
                </BrowserRouter>
            </>
        </PageWrapper>
    );
};
export default App;
