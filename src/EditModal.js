import React, { useState, useEffect } from 'react';
import './EditModal.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { editProduct, addTopProduct } from './actions';
import { connect } from 'react-redux';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 10, 7),
        outline: 0,
        border: 'none',
    },
}));

function EditModal(props) {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);
    const [top, setTop] = useState(false);
    const [image, setImage] = useState('');
    const [errors, setErrors] = useState([]);
    const [id, setId] = useState(-1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setName(props.product.name);
        setPrice(props.product.price);
        setImage(props.product.image);
        setCategory(props.product.category);
        setId(props.product.id);
    }, [props.product]);


    const handleImageChange = async (e) => {
        const link = e.target.files[0];
        setLoading(true);
        const data = new FormData();
        data.append('file', link);
        data.append('upload_preset', 'joblist');
        data.append('cloud_name', 'dxzf1xaj6');
        fetch('https://api.cloudinary.com/v1_1/dxzf1xaj6/image/upload', {
            method: 'POST',
            body: data
        }).then(response => response.json())
            .then(data1 => {
                setImage(data1.url);
                setLoading(false);
            });
    }
    const validate = () => {
        const error = [];

        if (category.length === 0) {
            error.push("*Please select the category");
        }
        else if (name.length === 0) {
            error.push("*Please enter the title");
        } else if (price === 0) {
            error.push("*Please enter a price");
        } else if (image?.length === 0) {
            error.push("*Please select an image file to upload");
        }
        return error;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validate();
        if (error?.length > 0) {
            setErrors(error);
        }
        else {
            setTimeout(() => {
                if (top) {
                    props.addTopProduct({ id, image, category, name, price });
                } else {
                    props.editProduct({ id, image, category, name, price });
                }
            }, 1000);
            props.close();
        }
        console.log({ id: 28, image, category, name, price });
    }
    const hiddenFileInput = React.useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.open}
                onClose={props.close}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <form className={classes.paper} method="post" onSubmit={handleSubmit}>
                        <div className="close-mark">
                            <CloseIcon className="closeIcon" onClick={props.close} />
                        </div>
                        <h3>Edit Product</h3>
                        <div>
                            <label>Product Categories</label>
                            <select className="select-field"
                                name="category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}>
                                <option value="Books">Books</option>
                                <option value="Bags">Bags</option>
                                <option value="Mugs">Mugs</option>
                                <option value="t-shirts">t-shirts</option>
                                <option value="Misc">Misc</option>
                            </select>
                        </div>
                        <div>
                            <label>Product Title</label>
                            <input
                                type="text"
                                placeholder="Product Title"
                                className="field"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label>Product Price</label>
                            <input
                                type="text"
                                placeholder="Product Price"
                                className="field"
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Top Products</label>
                            <input
                                type="checkbox"
                                name="top"
                                value={top}
                                onChange={(e) => setTop(e.target.checked)}
                            />
                        </div>
                        <div>
                            <input
                                accept="image/*"
                                className="file-input"
                                ref={hiddenFileInput}
                                id="contained-button-file"
                                type="file"
                                name="file"
                                onChange={handleImageChange}
                            />
                            <label htmlFor="contained-button-file">
                                <Button className="file-btn" onClick={handleClick}>
                                    Upload
                                </Button>
                            </label>
                            {loading === false && <p className="error">{props.product.image}</p>}
                            {loading && <CircularProgress color="secondary" />}
                        </div>
                        <hr className="line" />
                        {errors.map((error, i) => (
                            <p key={i + 'a'} className="error">{error}</p>
                        ))}
                        <div className="buttons">
                            <Button variant="contained" color="secondary" className="btn1">
                                Cancel
                            </Button>
                            <Button variant="contained" color="secondary" className="btn2" type="submit">
                                Save
                            </Button>
                        </div>

                    </form>
                </Fade>
            </Modal>
        </div >
    );
}

export default connect(null, { editProduct, addTopProduct })(EditModal);
