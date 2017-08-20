import TasksList from './TasksList'
import { connect } from 'react-redux'
import { enableEdit, edit, add, remove } from '../actions/actions.js'
import API from '../api/api.js'

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    enableEdit: state.enableEdit,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (item) => {
      dispatch(enableEdit(item))
    },
    onInputSaveTodo: (item) => {
      const ajaxCallback = (item) => {
        dispatch(edit(item))
      };
      API.editTodo(ajaxCallback, item)
    },
    onInputAddTodo: (item) => {
      const ajaxCallback = (item) => {
        dispatch(add(item))
      };
      API.addTodo(ajaxCallback, item)
    },
    onClickRemove: (item) => {
      const ajaxCallback = (item) => {
        dispatch(remove(item))
      };
      API.removeTodo(ajaxCallback, item)
    },
  }
}

const TasksListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksList)

export default TasksListContainer
