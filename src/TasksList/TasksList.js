import React from 'react'
import TaskForm from '../TaskForm/TaskForm'
import Task from '../Task/Task'

const TasksList = ({tasks, enableEdit, onTodoDoubleClick, onInputSaveTodo, onInputAddTodo, onClickRemove}) => {
  
  if (tasks && tasks.length > 0) {
    const handleEditClick = (e) => {
      var id
      if(e.target.dataset.id){
        id = parseInt(e.target.dataset.id,10)
      } else {
        id = parseInt(e.target.parentElement.dataset.id,10)
      }
      onTodoDoubleClick(id)
    }

    const handleRemoveClick = (e) => {
      var nodes = Array.from(e.target.parentNode.childNodes)
      
      var inputs = nodes.filter(n => {
        if(n.dataset && n.dataset.id){
          return n
        }
        return false
      })

      var taskId = inputs[0].dataset.id
      var todo = {
        id: taskId,
      }
      e.stopPropagation()
      onClickRemove(todo)  
    }
    
    return (
      <div>
          <TaskForm tasks={tasks} addAction={onInputAddTodo}/>
        <ul className="tasksList">

          <h2> Tasks </h2>
          {
            tasks.map(t => (
              <Task task={t} key={t.id} enableEdit={enableEdit} handleEditClick={handleEditClick} handleRemoveClick={handleRemoveClick} editAction={onInputSaveTodo}/>
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
