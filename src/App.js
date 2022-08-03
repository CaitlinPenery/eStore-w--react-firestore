import classes from "./global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "./containers/PageWrapper";
import Nav from "./components/Card/Nav";
import ProductList from "./containers/ProductList/ProductList";
import ShoppingCart from "./containers/ShoppingCart/ShoppingCart";

export const App = () => {
    return (
        <PageWrapper>
            <>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<h1>Home</h1>} />
                        <Route path="/products" element={<ProductList />} />
                        <Route path="/cart" element={<ShoppingCart />} />
                    </Routes>
                </BrowserRouter>
            </>
        </PageWrapper>
    );
};
export default App;

// import { getProducts } from "./services/products";

// const App = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         const wrapper = async () => {
//             const products = await getProducts();
//             setProducts(products);
//         };
//     }, []);

//     return (
//         <div className="App">
//             <h1>My Firestore App</h1>
//             {products.map((product) => (
//                 <h2></h2>
//             ))}
//         </div>
//     );
// };

// export default App;
