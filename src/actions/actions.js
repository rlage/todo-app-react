// on App.js

/**
  * Action to populate data with tasks from the server
  * @param data tasks from server
  */
export const populateApp = ({ data }) => {
  return {
    type: 'POPULATE_APP',
    data,
  }
}

// on TasksListContainer.js

/**
  * Action to enable task editing
  * @param data task id to edit
  */
export const enableEdit = (data) => {
  return {
    type: 'ENABLE_EDIT',
    data,
  }
}

/**
  * Action to save new info on task
  * @param data new task info to edit
  */
export const edit = ({ data }) => {
  return {
    type: 'EDIT',
    data,
  }
}

/**
  * Action to add task
  * @param data new task to add
  */
export const add = ({ data }) => {
  return {
    type: 'ADD',
    data,
  }
}

/**
  * Action to remove task
  * @param data task to remove
  */
export const remove = ({ data }) => {
  return {
    type: 'REMOVE',
    data,
  }
}