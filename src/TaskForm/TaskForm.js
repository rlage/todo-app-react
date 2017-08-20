import React from 'react';

const TaskForm = ({ tasks, task, addAction, editAction}) => {

  const handleAddClick = (e) => {
    var nodes = Array.from(e.target.parentNode.childNodes)
    var inputs = nodes.filter(n => {
      if(n.dataset && n.dataset.id){
        return n
      } else {
        return false
      }
    })
    var inputTitle = inputs[0]
    var inputDescription = inputs[1]
    var lastItemId = tasks.length > 0 ? tasks[tasks.length-1].id : 0
    var todo = {
      id: lastItemId+1,
      title: inputTitle.value,
      description: inputDescription.value,
    }
    if(todo.title === "" || todo.description === "") {
      return false
    }
    if(addAction){
      addAction(todo)
    }
  }

  const handleSaveClick = (e) => {
    var nodes = Array.from(e.target.parentNode.childNodes)
    var inputs = nodes.filter(n => {
      if(n.dataset && n.dataset.id){
        return n
      }
      return false
    })
    var inputTitle = inputs[0]
    var inputDescription = inputs[1]
    var todo = {
      id: inputTitle.dataset.id,
      title: inputTitle.value,
      description: inputDescription.value,
    }
    editAction(todo)  
  }

  var sectionTitle = "Add Task"
  var btnTitle = "Add"
  var dataId = "-1"
  var taskTitle = ""
  var taskDescription = ""
  var handleButtonClick = handleAddClick

  if(task){
    sectionTitle = "Edit Task"
    dataId = task.id
    btnTitle = "Save"
    taskTitle = task.title
    taskDescription = task.description
    handleButtonClick = handleSaveClick
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