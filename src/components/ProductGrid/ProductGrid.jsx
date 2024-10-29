import { useEffect } from 'react';
import { StaggeredGrid, StaggeredGridItem } from 'react-staggered-grid';
import ProductItem from '../ProductItem/ProductItem.jsx';
import './ProductGrid.css';
import getProducts from '../Products/Products.jsx';
import Loading from '../Loading/Loading.jsx';

const ProductGrid = () => {
    useEffect(() => {
    }, []);

    return (
        <div>
        <StaggeredGrid
            columnWidth={210}
            columns={0}
            alignment={1}
            horizontalGap={20}
            verticalGap={20}
            fitHorizontalGap={true}
            fitVerticalGap={true}
        >
            {getProducts.map((product, index) => (
                <StaggeredGridItem index={index} key={index}>
                <ProductItem
                    imgurl={product.imgurl}
                    imgalt={product.imgalt}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                />
                </StaggeredGridItem>
            ))}
        </StaggeredGrid>
        </div>
    );
};

export default ProductGrid;