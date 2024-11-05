import { Link } from 'react-router-dom';
import './ProductItem.css';

const truncateDescription = (description, limit) => {
    if (description.length > limit) {
        const truncated = description.substring(0, limit);
        return truncated.substring(0, truncated.lastIndexOf(' ')) + '...';
    }
    return description;
};

export default function ProductItem({ id, img, alt, title, description, price }) {
    return (
        <div className="product">
            <Link to={`/products/${id}`}><img src={img} alt={alt} style={{ width: '100%', height: 'auto' }} /></Link>
            <Link to={`/products/${id}`}><h2>{title}</h2></Link>
            <Link to={`/products/${id}`}><p>{truncateDescription(description, 50)}</p></Link>
            <h3>${price}</h3>
        </div>
    );
}