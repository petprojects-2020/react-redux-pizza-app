export const onAddToCart = obj => ({
    type: 'ON_ADD_PRODUCT',
    payload: obj
});

export const onDecrease = obj => ({
    type: 'ON_DECREASE',
    payload: obj
});

export const onDelete = obj => ({
    type: 'ON_DELETE',
    payload: obj
});

export const clearBasket = () => ({
    type: 'CLEAR_BASKET'
});