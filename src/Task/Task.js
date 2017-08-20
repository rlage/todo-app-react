import React from 'react';
import removeImg from '../images/remove.png'
import TaskForm from '../TaskForm/TaskForm'

const Task = ({task, enableEdit, handleSaveClick, onClickRemove, onTodoClick, editAction}) => {
  var classShow = "show"
  var classHide = "hide"

  const handleEditClick = (e) => {
    var id
    if(e.target.dataset.id){
      id = parseInt(e.target.dataset.id,10)
    } else {
      id = parseInt(e.target.parentElement.dataset.id,10)
    }
    onTodoClick(id)
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
    <div className="task-block">
      <img onClick={(e) => handleRemoveClick(e)} alt="remove button" className={"remove-img " + (task.id === enableEdit ? classHide : classShow)} src={removeImg} />
      <li className={task.id === enableEdit ? classHide : classShow} onClick={(e) => handleEditClick(e)} data-id={task.id}> {task.title}
        <div className="description"> {task.description} </div>
      </li>
      <li className={task.id === enableEdit ? classShow : classHide}>
        <div className="edit-group">
          <TaskForm task={task} handleButtonClick={handleSaveClick} editAction={editAction}/>
        </div>
      </li>
    </div>
  )
}

export default Task;
