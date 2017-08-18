import React from 'react'
import TasksList from './TasksList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const TasksListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TasksList)

export default TasksListContainer
