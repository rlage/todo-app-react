import React from 'react';

const TaskForm = ({ tasks, task, handleButtonClick }) => {
  var sectionTitle = "Add Task"
  var btnTitle = "Add"
  var dataId = "-1"
  var taskTitle = ""
  var taskDescription = ""

  if(task){
    sectionTitle = "Edit Task"
    dataId = task.id
    btnTitle = "Save"
    taskTitle = task.title
    taskDescription = task.description
  }
  
  return (
    <div>
      <h2> {sectionTitle} </h2>
      <div className="edit-group">
        Title: <input data-id={dataId} type="text" size="35" placeholder="Fill with task title" defaultValue={taskTitle}/>
        Description: <textarea data-id={dataId} cols="35" placeholder="Fill with task description" defaultValue={taskDescription}/>
        <button onClick={(e) => handleButtonClick(e)}> {btnTitle} </button>
      </div>
    </div>
  )
}

export default TaskForm