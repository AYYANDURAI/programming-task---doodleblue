import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import './Products.css';
import Product from './Product';

function Products(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(9);
    const [sorted, setSorted] = useState('');

    const styles = makeStyles({
        li: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    });

    const handleChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleSelected = (e) => {
        setSorted(e.target.value);
        return e.target.value.localeCompare('asc') === 0 ?
            props.products.sort((a, b) => (a.price - b.price)) :
            props.products.sort((a, b) => (b.price - a.price));
    };


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const classes = styles();

    return (
        <div className="products-container">
            <div className="products-header">
                <p className="pages">Showing {currentPage}-{Math.ceil(props.products?.length / productsPerPage)} of 9 results</p>
                <form>
                    <select
                        className="sorting-products"
                        value={sorted}
                        onChange={handleSelected}
                        name="criteria"
                    >
                        <option value="def">Default Sorting</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </form>
            </div>
            <div className="products">
                <div className="products-section">
                    {
                        props.tempProducts.length === 0 ? props.products?.slice(indexOfFirstProduct, indexOfLastProduct)?.map(product => (
                            <Product product={product} key={product.id} />
                        )) : props.tempProducts?.slice(indexOfFirstProduct, indexOfLastProduct)?.map(product => (
                            <Product product={product} key={product.id} />
                        ))
                    }
                </div>
                <Pagination
                    hidePrevButton
                    defaultPage={1}
                    size="large"
                    className={classes.li}
                    onChange={handleChange}
                    count={Math.ceil(props.products?.length / productsPerPage)}
                    shape="rounded"
                />
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return { products: state.products, tempProducts: state.tempProducts }
}

export default connect(mapStateToProps)(Products);
