import React from 'react'

const ProductItem = (props) => {
    const { productData } = props;
    return (
        <div className='card'>
            <img src={productData.image} alt='...' />
            <div className='card-body'>
                <h3 className='card-title'>{productData.name}</h3>
                <p className='card-text'>{productData.price}</p>
                <button className='btn btn-dark'>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductItem