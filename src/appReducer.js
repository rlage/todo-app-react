const appReducer = (state = [], action) => {
    switch(action.type){
        case 'POPULATE_APP':
            return {
                tasks: action.data,
            }
        case 'ENABLE_EDIT':
        return {
            ...state,
            enableEdit: action.data,
        }
        default:
            return state
    }
}

export default appReducer
