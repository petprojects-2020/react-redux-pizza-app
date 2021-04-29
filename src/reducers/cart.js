const initialState = {
    cartItems: [],
    orderTotal: 0,
    isClicked: false,    
};
  
  const updateCartItems = (cartItems, item, idx) => {
    if(item.count === 0) {
      return [
        ...cartItems.slice(0, idx),
        ...cartItems.slice(idx+1)
      ];      
    }
    if(idx === -1) {
      return [
        ...cartItems,
        item
      ];      
    }
    return [
      ...cartItems.slice(0, idx),
      item,
      ...cartItems.slice(idx+1)
    ];
  };
  
  const updateCartItem = (obj, item={}, quantity) => {
    const { id=obj.id, title=obj.title, 
            image=obj.image, count=0, total=0, 
            size = obj.size, price=obj.price} = item;
    return {
      id,
      title,
      size,
      image,
      count: count + quantity,
      total: total + quantity*price,
      price
    };
  };
  
  const updateOrder = (state, obj, quantity) => {
    const itemId = obj.id;
    const itemIndex = state.cartItems.findIndex(({id})=> id === itemId);
    const item = state.cartItems[itemIndex];
    const newItem = updateCartItem(obj, item, quantity);
    
      return {
        ...state,
        cartItems: updateCartItems(state.cartItems, newItem, itemIndex),
        orderTotal: updateCartItems(state.cartItems, newItem, itemIndex).reduce((total, item) => total + item.total, 0),
        isClicked: false
      };
  }
  
    export default (state = initialState, action) => {
      switch (action.type) {
        case 'ON_ADD_PRODUCT':
          return updateOrder(state, action.payload, 1);
        case 'ON_DECREASE':
          return updateOrder(state, action.payload, -1);
        case 'ON_DELETE':
          return updateOrder(state, action.payload, -action.payload.count);
        case 'CLEAR_BASKET':
          let newCartItems = [...state.cartItems];
          newCartItems = [];
          return {
            ...state,
            cartItems: newCartItems,
            orderTotal: 0
        };
        default:
          return state;
      }
    }