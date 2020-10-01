import _ from 'lodash';

const initialState = {
    tempProducts: [],
    topProducts: [{
        "id": 28,
        "category": "Books",
        "name": "The Art of Letting Go",
        "image": "https://m.media-amazon.com/images/I/516crkwjnhL._SL500_.jpg",
        "price": 109
    },
    {
        "id": 29,
        "category": "Books",
        "name": "The Book of Why",
        "image": "https://rukminim1.flixcart.com/image/416/416/k5o7r0w0/book/4/1/0/the-book-of-why-original-imafbjgfxzzjvyth.jpeg",
        "price": 95
    },
    {
        "id": 30,
        "category": "Books",
        "name": "The Law of Success",
        "image": "https://m.media-amazon.com/images/I/41FLKI4LR2L._SL500_.jpg",
        "price": 149
    }],
    products: [{
        "id": 1,
        "category": "Books",
        "name": "The Art of Letting Go",
        "image": "https://m.media-amazon.com/images/I/516crkwjnhL._SL500_.jpg",
        "price": 109
    },
    {
        "id": 2,
        "category": "Books",
        "name": "The Book of Why",
        "image": "https://rukminim1.flixcart.com/image/416/416/k5o7r0w0/book/4/1/0/the-book-of-why-original-imafbjgfxzzjvyth.jpeg",
        "price": 95
    },
    {
        "id": 3,
        "category": "Books",
        "name": "The Law of Success",
        "image": "https://m.media-amazon.com/images/I/41FLKI4LR2L._SL500_.jpg",
        "price": 149
    },
    {
        "id": 4,
        "category": "Books",
        "name": "Belive in Yourself",
        "image": "https://rukminim1.flixcart.com/image/416/416/jpu324w0/book/0/9/0/believe-in-yourself-original-imafbzz2h7yfg5zz.jpeg",
        "price": 199
    },
    {
        "id": 5,
        "category": "t-shirts",
        "name": "t-shirt",
        "image": "https://www.beyoung.in/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/p/o/powered_by_chai_burgundy_men_mockup_2__1_1.jpg",
        "price": 178
    },
    {
        "id": 6,
        "category": "t-shirts",
        "name": "t-shirt",
        "image": "https://contents.mediadecathlon.com/p551528/460x460/sq/fts100_fitness_cardio_t-shirt_-_grey_domyos_by_decathlon_8278626_551528.jpg",
        "price": 129
    },
    {
        "id": 7,
        "category": "t-shirts",
        "name": "t-shirt",
        "image": "https://images-na.ssl-images-amazon.com/images/I/410bPTGObzL.jpg",
        "price": 399
    },
    {
        "id": 8,
        "category": "t-shirts",
        "name": "t-shirt",
        "image": "https://images-na.ssl-images-amazon.com/images/I/81kRlK5-DYL._UX679_.jpg",
        "price": 349
    },
    {
        "id": 9,
        "category": "t-shirts",
        "name": "t-shirt",
        "image": "https://images-na.ssl-images-amazon.com/images/I/81kRlK5-DYL._UX679_.jpg",
        "price": 299
    },
    {

        "id": 10,
        "category": "t-shirts",
        "name": "t-shirt",
        "price": 249,
        "image": "https://images-na.ssl-images-amazon.com/images/I/91hqUOKOvkL._UL1500_.jpg"
    },
    {

        "id": 11,
        "category": "Bags",
        "name": "Back Bag",
        "price": 449,
        "image": "https://images-na.ssl-images-amazon.com/images/I/91F5fssHaVL._SL1500_.jpg"
    },
    {

        "id": 12,
        "category": "Bags",
        "name": "Back Bag",
        "price": 499,
        "image": "https://images-na.ssl-images-amazon.com/images/I/41J7NtYE%2B7L.jpg"
    },
    {

        "id": 13,
        "category": "Bags",
        "name": "Trukking Bag",
        "price": 412,
        "image": "https://images.bewakoof.com/original/smiley-headphone-printed-small-backpack-printed-small-backpack-237465-1572674396.jpg"
    },
    {
        "id": 14,
        "category": "Bags",
        "name": "Travel Bag",
        "price": 509,
        "image": "https://images-na.ssl-images-amazon.com/images/I/A1IYx6jQ1tL._SL1500_.jpg"
    },
    {
        "id": 15,
        "category": "Bags",
        "name": "Laptop Bag",
        "price": 485,
        "image": "https://images-na.ssl-images-amazon.com/images/I/41GXcyjRoOL.jpg"
    },
    {
        "id": 16,
        "category": "Bags",
        "name": "Travel Bag",
        "price": 255,
        "image": "https://contents.mediadecathlon.com/p1284592/8fa29ad9cf787da6af69bff08bf8a0c0/p1284592.jpg"
    },
    {

        "id": 17,
        "category": "Mugs",
        "name": "Yellow Mug",
        "price": 20,
        "image": "https://f1af951e8abcbc4c70b9-9997fa854afcb64e87870c0f4e867f1d.lmsin.net/1000006347933-1000006347932_01-750.jpg"
    },
    {
        "id": 18,
        "category": "Mugs",
        "name": "Red Mug",
        "price": 39,
        "image": "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000002933146-1000002933145_01-750.jpg"
    },
    {
        "id": 19,
        "category": "Mugs",
        "name": "Flower Mug",
        "price": 25,
        "image": "https://809fcedc4a4c2e0e3a54-0908f7c4d20fa14a53c9b6a1907a24c5.lmsin.net/1000007787219-1000007787218_01-750-1.jpg"
    },
    {
        "id": 20,
        "category": "Mugs",
        "name": "Sandstone Brown",
        "price": 19,
        "image": "https://static.jaypore.com/tr:w-500,h-662,e-sharpen/media/catalog/product/s/d/sdohoj80067789-1_2.jpg"
    },
    {
        "id": 21,
        "category": "Mugs",
        "name": "Ceramic Black",
        "price": 34,
        "image": "https://images-na.ssl-images-amazon.com/images/I/61R7cefsqRL._SL1500_.jpg"
    },
    {
        "id": 22,
        "category": "Pants",
        "name": "Blue Jean",
        "price": 550,
        "image": "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000008969906-Blue-Blue-1000008969906_01-235.jpg"
    },
    {
        "id": 23,
        "category": "Pants",
        "name": "Fit Jean",
        "price": 529,
        "image": "https://6c819239693cc4960b69-cc9b957bf963b53239339d3141093094.lmsin.net/1000009017282-Blue-MidStone-1000009017282_01-235.jpg"
    },
    {
        "id": 24,
        "category": "Pants",
        "name": "Black Jean",
        "price": 589,
        "image": "https://5.imimg.com/data5/AG/TB/MY-10139824/15-500x500.jpg"
    },
    {
        "id": 25,
        "category": "Keyboards",
        "name": "Black Color",
        "price": 590,
        "image": "https://images-na.ssl-images-amazon.com/images/I/81a8akYBGRL._SX679_.jpg"
    },
    {
        "id": 26,
        "category": "Keyboards",
        "name": "White Color",
        "price": 210,
        "image": "https://images-na.ssl-images-amazon.com/images/I/4147QBLyikL.jpg"
    },
    {
        "id": 27,
        "category": "Keyboards",
        "name": "Color Light",
        "price": 330,
        "image": "https://images-na.ssl-images-amazon.com/images/I/71dEIJGJx8L._AC_SL1271_.jpg"
    }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            let product = action.payload;
            let newState = _.cloneDeep(state);
            newState.products.push(product);
            return newState;
        }
        case 'ADD_TOPPRODUCT': {
            let topProduct = action.payload;
            let newState = _.cloneDeep(state);
            newState.topProducts.push(topProduct);
            return newState;
        }
        case 'EDIT_PRODUCT': {
            let newState = _.cloneDeep(state);
            let products = _.map(newState.products, product => {
                if (product.id === action.payload.id) {
                    product.name = action.payload.name;
                    product.price = action.payload.price;
                    product.image = action.payload.image;
                    product.category = action.payload.category;
                }
                return product;
            });
            newState.products = products;
            return newState;
        }
        case 'FILTER_BY_CATEGORY': {
            let newState = _.cloneDeep(state);
            let products = _.filter(newState.products, product => product.category === action.payload)
            newState.tempProducts = products;
            return newState;
        }
        case 'FILTER_BY_PRICE': {
            let newState = _.cloneDeep(state);
            let range1 = action.payload.range1;
            let range2 = action.payload.range2;
            let products = _.filter(newState.products, product => product.price >= range1 && product.price <= range2)
            newState.tempProducts = products;
            return newState;
        }
        default:
            return state;
    }
}

export default reducer;