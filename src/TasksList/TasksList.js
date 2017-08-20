import React from 'react'
import TaskForm from '../TaskForm/TaskForm'
import Task from '../Task/Task'

/**
  * Component to render a list of tasks
  * @param tasks represents the list of tasks
  * @param enableEdit id of task if it is enabled for editing
  * @param onClickRemove function to pass data to remove action
  * @param onTodoClick function to pass data to enable edit action
  * @param onInputSaveTodo represents the action to update a task
  * @param onInputAddTodo represents the action to add a task
  */
const TasksList = ({
  tasks,
  enableEdit,
  onClickRemove,
  onTodoClick,
  onInputSaveTodo,
  onInputAddTodo,
}) => {
  
  if (tasks && tasks.length > 0) {
    return (
      <div>
          <TaskForm tasks={tasks} addAction={onInputAddTodo}/>
        <ul className="tasksList">

          <h2> Tasks </h2>
          {
            tasks.map(t => (
              <Task task={t} key={t.id} enableEdit={enableEdit} onClickRemove={onClickRemove} onTodoClick={onTodoClick} editAction={onInputSaveTodo}/>
            ))
          }
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <TaskForm tasks={tasks} addAction={onInputAddTodo}/>
        <ul className="tasksList">
          <h2> Tasks </h2>
        </ul>
      </div>
    )
  }
}

export default TasksList;
