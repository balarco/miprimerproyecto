import ProductGrid from "../ProductGrid/ProductGrid.jsx";
import MyHeader from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

function StorePage() {
    const producto = [

    ];

    return (
        <>
            <MyHeader/>
            <ProductGrid />
            <Footer/>
        </>
    );
}

export default StorePage;