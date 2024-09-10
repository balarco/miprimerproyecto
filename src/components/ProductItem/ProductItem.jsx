import './ProductItem.css';

const truncateDescription = (description, limit) => {
    if (description.length > limit) {
        const truncated = description.substring(0, limit);
        return truncated.substring(0, truncated.lastIndexOf(' ')) + '...';
    }
    return description;
};

const ProductItem = ({ imgurl, imgalt, title, description, price }) => {
    return (
        <div className="product">
            <img src={imgurl} alt={imgalt} style={{ width: '100%', height: 'auto' }} />
            <h2>{title}</h2>
            <p>{truncateDescription(description, 50)}</p>
            <h3>${price}</h3>
        </div>
    );
};

export default ProductItem;