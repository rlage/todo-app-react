// on App.js
export const populateApp = ({data}) => {
    return {
        type: 'POPULATE_APP',
        data,
    }
}

// on TasksList.js
export const enableEdit = (data) => {
    return {
        type: 'ENABLE_EDIT',
        data,
    }
}

export const edit = ({data}) => {
    return {
        type: 'EDIT',
        data,
    }
}

export const add = ({data}) => {
    return {
        type: 'ADD',
        data,
    }
}