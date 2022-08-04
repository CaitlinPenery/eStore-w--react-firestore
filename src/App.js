import classes from "./global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "./containers/PageWrapper";
import Nav from "./components/Nav/";

import ShoppingCart from "./containers/ShoppingCart/ShoppingCart";
import LandingPage from "./containers/LandingPage/LandingPage";

export const App = () => {
    return (
        <PageWrapper>
            <>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<LandingPage />} />

                        <Route path="/cart" element={<ShoppingCart />} />
                    </Routes>
                </BrowserRouter>
            </>
        </PageWrapper>
    );
};
export default App;
