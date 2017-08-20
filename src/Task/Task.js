import React from 'react';
import removeImg from '../images/remove.png'

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
        <h2> Edit task </h2>
        <div className="edit-group">
          Title: <input data-id={task.id} type="text" size="35" defaultValue={task.title} />
          Description: <textarea data-id={task.id} cols="35" defaultValue={task.description} />
          <button onClick={(e) => handleSaveClick(e)}> Save </button>
        </div>
      </li>
    </div>
  )
}

export default Task;
