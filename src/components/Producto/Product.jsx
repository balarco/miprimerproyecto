import MyImage from '../Image/Image.jsx';
import './Product.css';

const truncateDescription = (description, limit) => {
    if (description.length > limit) {
        const truncated = description.substring(0, limit);
        return truncated.substring(0, truncated.lastIndexOf(' ')) + '...';
    }
    return description;
};

const Product = ({ imgurl, imgalt, title, description }) => {
    const truncatedDescription = truncateDescription(description, 50); // Adjust character limit

    return (
        <div className="product">
            <MyImage imgurl={imgurl} imgalt={imgalt} />
            <h2>{title}</h2>
            <p>{truncatedDescription}</p>
        </div>
    );
}

export default Product;