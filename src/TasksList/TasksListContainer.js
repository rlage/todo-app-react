import TasksList from './TasksList'
import { connect } from 'react-redux'
import { enableEdit, edit } from '../actions/actions.js'

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        enableEdit: state.enableEdit,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoDoubleClick: (item) => {
            dispatch(enableEdit(item))
        },
        onInputEnterKey: (item) => {
            dispatch(edit(item))
        },
    }
}

const TasksListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksList)

export default TasksListContainer
