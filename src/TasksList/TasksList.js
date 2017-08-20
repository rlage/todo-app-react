import React from 'react';
import AddTask from '../AddTask/AddTask';
import removeImg from '../images/remove.png';

const TasksList = ({tasks, enableEdit, onTodoDoubleClick, onInputSaveTodo, onInputAddTodo}) => {
  var classShow = "show"
  var classHide = "hide"

  if (tasks && tasks.length > 0) {
    const handleDoubleClick = (e) => {
      var id
      if(e.target.dataset.id){
        id = parseInt(e.target.dataset.id,10)
      } else {
        id = parseInt(e.target.parentElement.dataset.id,10)
      }
      onTodoDoubleClick(id)
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
      onInputSaveTodo(todo)  
    }
    return (
      <div className="app">
          <AddTask tasks={tasks} onInputAddTodo={onInputAddTodo}/>
        <ul className="tasksList">

          <h2> Tasks </h2>
          {
            tasks.map(t => (
              <div className="task-block" key={t.id}>
                <img className="remove-img" src={removeImg}/>
                <li className={t.id === enableEdit ? classHide : classShow} onClick={(e) => handleDoubleClick(e)} data-id={t.id}> {t.title}
                  <div className="description"> {t.description} </div>
                </li>
                <li className={t.id === enableEdit ? classShow : classHide}> 
                  <h2> Edit task: </h2>
                  <div className="edit-group">
                    Title: <input data-id={t.id} type="text" size="35" defaultValue={t.title}/>
                    Description: <textarea data-id={t.id} cols="35" defaultValue={t.description}/>
                    <button onClick={(e) => handleSaveClick(e)}> Save </button>
                  </div>
                </li>
              </div>
            ))
          }
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h1> Tasks </h1>
        <AddTask tasks={tasks} onInputAddTodo={onInputAddTodo}/>
      </div>
    )
  }
}

export default TasksList;
