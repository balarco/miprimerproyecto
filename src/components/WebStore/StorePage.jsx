import MyHeader from "../Header/Header.jsx";
import Product from "../Producto/Product.jsx";
import Footer from "../Footer/Footer.jsx";

function StorePage() {
    const producto = [
        {
            imgurl: "https://via.placeholder.com/150",
            imgalt: "Product 1",
            title: "Product 1",
            description: "tee tee tee tee tee tee tee teetee tee tee tee tee tee tee"
        },
        {
            imgurl: "https://via.placeholder.com/150",
            imgalt: "Product 2",
            title: "Product 2",
            description: "Description for product 2"
        }
    ];

    return (
        <>
            <MyHeader title="Header" />
            <div className="product-container">
                <main className="product-grid">
                    {producto.map((product, index) => (
                        <Product
                            key={index}
                            imgurl={product.imgurl}
                            imgalt={product.imgalt}
                            title={product.title}
                            description={product.description}
                        />
                    ))}
                </main>
            </div>
            <Footer />
        </>
    );
}

export default StorePage;