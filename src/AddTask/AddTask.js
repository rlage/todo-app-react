import React from 'react';

const AddTask = ({tasks, onInputAddTodo}) => {

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
    onInputAddTodo(todo)
      
  }
  return (
      <div>
        <h2> Add task </h2>
        <div className="edit-group">
          Title: <input data-id="-1" type="text" size="35" placeholder="Fill with task title"/>
          Description: <textarea data-id="-1" cols="35" placeholder="Fill with task description"/>
          <button onClick={(e) => handleAddClick(e)}> Add </button>
        </div>
      </div>
  )
}

export default AddTask
