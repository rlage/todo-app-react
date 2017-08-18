const appReducer = (state = [], action) => {
    switch(action.type){
        case 'POPULATE_APP':
            return {
                tasks: action.data,
            };
        default:
            return state
    }
}

export default appReducer
