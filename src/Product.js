import React, { useState } from 'react';
import EditModal from './EditModal';

function Product({ product }) {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    }
    return (
        <div className="product-section">
            <div className="product__card" key={product.id} onClick={handleOpen}>
                <img src={product.image} alt={product.name} />
                <div>
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                </div>
            </div>
            <EditModal open={open} close={handleClose} product={product} />
        </div>
    )
}

export default Product;
