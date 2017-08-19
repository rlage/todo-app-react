import React from 'react';

const TasksList = ({tasks, enableEdit, onTodoDoubleClick, onInputEnterKey}) => {
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

    const handleEnterKey = (e) => {
      if (e.keyCode === 13) {
        console.log("enter")
      }
      onInputEnterKey(parseInt(e.target.dataset.id,10))
    }
    return (
        <ul className="tasksList">
          <h1> Tasks </h1>
          {
            tasks.map(t => (
              <div className="task-block" key={t.id}>
                <li className={t.id === enableEdit ? classHide : classShow} onDoubleClick={(e) => handleDoubleClick(e)} data-id={t.id}> {t.title}
                  <div className="description"> {t.description} </div>
                </li>
                <li className={t.id === enableEdit ? classShow : classHide}> 
                  <h2> Edit task: </h2>
                  <div className="edit-group">
                    Title: <input data-id={t.id} onKeyUp={(e) => handleEnterKey(e)} type="text" size="35" defaultValue={t.title}/>
                    Description: <textarea data-id={t.id} onKeyUp={(e) => handleEnterKey(e)} defaultValue={t.description}/>
                  </div>
                </li>
              </div>
            ))
          }
        </ul>
    );
  } else {
    return null
  }
}

export default TasksList;
