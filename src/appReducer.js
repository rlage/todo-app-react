const appReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_APP':
      return {
        tasks: action.data,
      }
    case 'ENABLE_EDIT':
      return {
        ...state,
        enableEdit: action.data,
      }
    case 'EDIT':
      var task = action.data
      var newTasks = []
      newTasks = state.tasks.map(t => {
        if (t.id !== task.id) {
          return t
        } else {
          return task
        }
      })
      return {
        ...state,
        tasks: newTasks,
        enableEdit: undefined,
      }
    case 'ADD':
      task = action.data
      newTasks = []
      newTasks = state.tasks.slice()
      newTasks.push(task)

      return {
        ...state,
        tasks: newTasks,
        enableEdit: undefined,
      }
    case 'REMOVE':
      task = action.data
      newTasks = state.tasks.filter(t => {
        if (t.id !== task.id) {
          return t
        }
      })
      console.log(newTasks)
      return {
        ...state,
        tasks: newTasks,
        enableEdit: undefined,
      }
    default:
      return state
  }
}

export default appReducer
