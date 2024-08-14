import { useState } from "react"
import addTask from "../../../hooks/addTask"
import removeTask from "../../../hooks/remove";
import "./MainCard.css"
import saveLocalStorage from "../../../hooks/saveLocalStorage";

export default function MainCard({ name, taskList, setTaskList }) {
  const maxTasks = 20;
  
  return (
    <div className="mainCard">
      <div className="mainCard-header">
        <h2>{name}</h2>
      </div>
      <div className="mainCard-taskList">
        {taskList.map((task, index) => (
          <div key={index} className="task">
            <div>
              {index + 1 + ". "}
              <input
                type="text" 
                id={"inp-" + index} 
                className="input" 
                value={task}
                onChange={(ev) => {
                  const updatedList  = [...taskList]
                  updatedList[index] = ev.target.value
                  setTaskList(updatedList)
                  saveLocalStorage(name, updatedList)
                }}/>
            </div>
            <div className="remove" onClick={() => removeTask(name, taskList, setTaskList, index)}>remove</div>
          </div>
        ))}
      </div>
      <div className="divBtn">
        <button 
        className="btnAdd" 
        onClick={() => addTask(name, taskList, setTaskList, maxTasks)}
        >Add</button>
      </div>
    </div>
  )
}