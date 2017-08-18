import React from 'react';

const TasksList = ({tasks}) => {
  if (tasks && tasks.length > 0) {
    return (
        <ul className="tasksList">
          {
            tasks.map(t => <li key={t.id} id={t.id}> {t.name} </li>)
          }
        </ul>
    );
  } else {
    return null
  }
}

export default TasksList;
