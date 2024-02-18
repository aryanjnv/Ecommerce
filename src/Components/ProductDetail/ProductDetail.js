import React from 'react';
import { useParams } from 'react-router';
import styles from './ProductDetail.module.css'; // Import CSS module

const ProductDetail = ({ productsArr }) => {
    const { productId } = useParams();

    // Find the product with the matching productId
    const product = productsArr.find(product => product.id === parseInt(productId));

    // If no product found, you can display a message or redirect to a 404 page
    if (!product) {
        return <div className={styles.productDetail}>Product not found</div>;
    }

    return (
        <div className={styles.productDetail}>
            <h2 className={styles.productTitle}>Product Detail</h2>
            <img src={product.imageUrl} alt="" className={styles.productImage} />
            <p className={styles.productTitle}>{product.title}</p>
            <p className={styles.productPrice}>Price: ${product.price}.00</p>
            {/* Display other details as needed */}
        </div>
    );
};

export default ProductDetail;