const initialState = {
    value: 0,
    color: "#000000",
}

const reducer = (state = initialState, action) => {
    let { type, value} = action;
    if (type === "CHANGEVALUE") {
        return {
            value: state.value + value,
            color: state.color 
        }
    }  else if (type === "CHANGECOLOR") {
        return {
            value: state.value,
            color: value
        }
    }  else if (type === "NUMBER") {
        return {
            value: value,
            color: state.color
        }
    }
    return state
}