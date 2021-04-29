const initialState = {
    pizzas: null,
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                pizzas: action.payload,
                error: false

            };
        case 'SET_DATA_FAILED':
            return {
                ...state,
                error: true
            };
        default: 
            return state;
    }
}

