import React from 'react';
import './TopProducts.css';
import StarIcon from '@material-ui/icons/Star';
import { connect } from 'react-redux';


function TopProducts(props) {

    return (
        <div className="top-products">
            <h5 className="products__title">Top Products</h5>
            <div className="demo-products">
                {props.topProducts?.map(topproduct => <div className="top-product" key={topproduct.id}>
                    <img src={topproduct.image} alt="mug" />
                    <div>
                        <p>{topproduct.name}</p>
                        <div className="stars">
                            <StarIcon className="star" />
                            <StarIcon className="star" />
                            <StarIcon className="star" />
                            <StarIcon className="star" />
                            <StarIcon className="star" />
                        </div>
                        <p>${topproduct.price}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { topProducts: state.topProducts }
}

export default connect(mapStateToProps)(TopProducts);
