import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleCheck, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

const ToDo = ({ toDo, markDone, deleteTask }) => {
  const style = {
    color: 'inherit',
  }
  return(
    <>
      {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (task, index) => {
        return(
          <React.Fragment key={task.id}>
            <div className="col taskBg">
              <div className={ task.status ? 'done' : '' }>
                <span className="taskNumber">{index + 1}</span>
                <span className="taskText"><a href={task.link} target='_blank' rel="noreferrer" style={style}>{task.title}</a></span>
              </div>
              <div className="iconsWrap">
                <span title="Completed / Not Completed"
                  onClick={ (e) => markDone(task) }
                >
                  <FontAwesomeIcon icon={faCircleCheck}  style={{color: '#1f2833'}}/>
                </span>

                <span title="Delete"
                  onClick={() => deleteTask(task.id)}
                >
                  <FontAwesomeIcon icon={faTrashCan} style={{color: '#1f2833'}}/>
                </span>
              </div>
            </div>
          </React.Fragment>
        )
      })
      }  
    </>
  )
}

export default ToDo;