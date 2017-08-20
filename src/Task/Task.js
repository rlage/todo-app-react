import React from 'react';
import removeImg from '../images/remove.png'
import TaskForm from '../TaskForm/TaskForm'

/**
  * Component to render a task
  * @param task represents the task
  * @param enableEdit id of task if it is enabled for editing
  * @param onClickRemove function to pass data to remove action
  * @param onTodoClick function to pass data to enable edit action
  * @param editAction represents the action to edit a task
  */
const Task = ({
  task,
  enableEdit,
  onClickRemove,
  onTodoClick,
  editAction
}) => {
  var classShow = "show"
  var classHide = "hide"

  /**
  * Get task id from form and send
  * to re-render with edit form
  * @param e click event
  */
  const handleEditClick = (e) => {
    var id
    if(e.target.dataset.id){
      id = parseInt(e.target.dataset.id,10)
    } else {
      id = parseInt(e.target.parentElement.dataset.id,10)
    }
    onTodoClick(id)
  }

  /**
  * Get task id from form and send
  * to remove task
  * @param e click event
  */
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
    <div className="task-block">
      <img onClick={(e) => handleRemoveClick(e)} alt="remove button" className={"remove-img " + (task.id === enableEdit ? classHide : classShow)} src={removeImg} />
      <li className={task.id === enableEdit ? classHide : classShow} onClick={(e) => handleEditClick(e)} data-id={task.id}> {task.title}
        <div className="description"> {task.description} </div>
      </li>
      <li className={task.id === enableEdit ? classShow : classHide}>
        <div className="edit-group">
          <TaskForm task={task} editAction={editAction}/>
        </div>
      </li>
    </div>
  )
}

export default Task;
