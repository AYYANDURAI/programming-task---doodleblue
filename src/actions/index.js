export const addProduct = (product) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}
export const addTopProduct = (product) => {
    return {
        type: 'ADD_TOPPRODUCT',
        payload: product
    }
}
export const editProduct = (product) => {
    return {
        type: 'EDIT_PRODUCT',
        payload: product
    }
}

export const filterByCategory = (category) => {
    return {
        type: 'FILTER_BY_CATEGORY',
        payload: category
    }
}

export const filterByPrice = (prices) => {
    return {
        type: 'FILTER_BY_PRICE',
        payload: {
            range1: prices[0],
            range2: prices[1]
        }
    }
}