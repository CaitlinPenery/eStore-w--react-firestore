import ResultCarousel from "../../components/ResultCarousel/resultCarousel";
import ProductList from "../ProductList/ProductList";
import { APIContextProvider } from "../../context/context";

const LandingPage = () => {
    return (
        <>
            <APIContextProvider>
                <ResultCarousel />
                <ProductList />
            </APIContextProvider>
        </>
    );
};

export default LandingPage;
