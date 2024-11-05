import { useEffect, useState } from 'react';
import { StaggeredGrid, StaggeredGridItem } from 'react-staggered-grid';
import ProductItem from '../ProductItem/ProductItem.jsx';
import './ProductGrid.css';
import { getProducts } from '../Products/Products.jsx';
import Loading from '../Loading/Loading.jsx';

export default function ProductGrid ({ products: initialProducts }){
    const [products, setProducts] = useState(initialProducts || []);
    const [loading, setLoading] = useState(!initialProducts);

    useEffect(() => {
        if(!initialProducts) {
            getProducts().then((data) =>{
                setProducts(data)
                setLoading(false)
            });
        }else{
            setLoading(false)
        }
    }, [initialProducts]);

    return (
        <>
            {loading ?(
                <div>
                    <Loading />
                </div>
            ):(
        <StaggeredGrid
            columnWidth={210}
            columns={0}
            alignment={1}
            horizontalGap={20}
            verticalGap={20}
            fitHorizontalGap={true}
            fitVerticalGap={true}
        >
            {products.map((product, index) => (
                <StaggeredGridItem index={index} key={product + index}>
                    <ProductItem {...product} key={product.id}/>
                </StaggeredGridItem>
            ))}
        </StaggeredGrid>
            )}
        </>
    )
}
