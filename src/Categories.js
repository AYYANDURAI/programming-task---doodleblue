import React, { useState } from 'react';
import './Catogories.css';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TopProducts from './TopProducts'
import { filterByCategory, filterByPrice } from './actions';
import { connect } from 'react-redux';


function Categories(props) {
    const [value, setValue] = useState([29, 599]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const useStyles = makeStyles((theme) => ({
        root: {
            width: 150
        },
        margin: {
            height: theme.spacing(5),
        },
    }));

    const classes = useStyles();

    const handleClick = (e) => {
        props.filterByCategory(e.target.textContent);
    }
    const handlePriceFilter = () => {
        props.filterByPrice(value);
    }
    return (
        <div className="categories">
            <h5 className="categories__title">Categories</h5>
            <div className="categories__container">
                <p onClick={handleClick} className="category">Books</p>
                <p onClick={handleClick} className="category">t-shirts</p>
                <p onClick={handleClick} className="category">Bags</p>
                <p onClick={handleClick} className="category">Misc</p>
            </div>
            <div className={classes.margin}>
                <h5 className="filter__title">Filter by price</h5>
                <Slider
                    track="inverted"
                    aria-labelledby="track-inverted-range-slider"
                    value={value}
                    onChange={handleChange}
                    className="price"
                    min={29}
                    max={599}
                />
            </div>
            <div className="categories__filter">
                <Button variant="contained" color="secondary" className="btn" onClick={handlePriceFilter}>
                    Filter
                </Button>
                <p>Price: $29-$599</p>
            </div>
            <TopProducts />
        </div>
    )
}

export default connect(null, { filterByCategory, filterByPrice })(Categories);
