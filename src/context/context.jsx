import { useContext, useState, useEffect, createContext } from "react";
import { getProducts } from "../services/products";

const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
        };
        fetchProducts();
    }, []);

    return (
        <APIContext.Provider value={{ products }}>
            {children}
        </APIContext.Provider>
    );
};

export const useAPI = () => {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
};
