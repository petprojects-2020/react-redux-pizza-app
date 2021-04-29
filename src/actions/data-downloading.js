export const setData = (pizza) => {
    return {
        type: "SET_DATA",
        payload: pizza
    };
};

export const setDataFailed = () => {
    return {
        type: "SET_DATA_FAILED"
    };
};

