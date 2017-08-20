import React from 'react';
import removeImg from '../images/remove.png'
import TaskForm from '../TaskForm/TaskForm'

const Task = ({task, enableEdit, handleRemoveClick, handleSaveClick, handleEditClick}) => {
  var classShow = "show"
  var classHide = "hide"

  return (
    <div className="task-block">
      <img onClick={(e) => handleRemoveClick(e)} alt="remove button" className={"remove-img " + (task.id === enableEdit ? classHide : classShow)} src={removeImg} />
      <li className={task.id === enableEdit ? classHide : classShow} onClick={(e) => handleEditClick(e)} data-id={task.id}> {task.title}
        <div className="description"> {task.description} </div>
      </li>
      <li className={task.id === enableEdit ? classShow : classHide}>
        <div className="edit-group">
          <TaskForm task={task} handleButtonClick={handleSaveClick}/>
        </div>
      </li>
    </div>
  )
}

export default Task;
