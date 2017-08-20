import React from 'react'
import TaskForm from '../TaskForm/TaskForm'
import Task from '../Task/Task'

const TasksList = ({tasks, enableEdit, onTodoClick, onInputSaveTodo, onInputAddTodo, onClickRemove}) => {
  
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
