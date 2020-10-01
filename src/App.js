import React from 'react';
import Categories from './Categories';
import Products from './Products';
import Button from '@material-ui/core/Button';
import AddModal from './AddModal';
import './App.css';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="app">
      <div className="app__header">
        <h1 className="title">Products</h1>
        <Button variant="contained" color="secondary" className="button" onClick={handleOpen}>
          Add Product
        </Button>
      </div>
      <AddModal open={open} close={handleClose} />
      <div className="app__container">
        <Categories />
        <Products />
      </div>
    </div>
  );
}

export default App;
