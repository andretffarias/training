import { useState } from "react"
import "./MainCard.css"
import addTask from "../../../hooks/addTask"
import removeTask from "../../../hooks/removeTask";

export default function MainCard({ name, taskList }) {
  const [list, setList] = useState(taskList)
  const maxTasks = 20;
  
  return (
    <div className="mainCard">
      <div className="mainCard-header">
        <h2>{name}</h2>
      </div>
      <div className="mainCard-taskList">
        {list.map((task, index) => (
          <div key={index} className="task">
            <div>
              {index + 1 + ". "}
              <input
                type="text" 
                id={"inp-" + index} 
                className="input" 
                value={task}
                onChange={(ev) => {
                  const updatedList  = [...list]
                  updatedList[index] = ev.target.value
                  setList(updatedList)
                }}/>
            </div>
            <div className="remove" onClick={() => removeTask(index, list)}>remove</div>
          </div>
        ))}
      </div>
      <div className="divBtn">
        <button 
        className="btnAdd" 
        onClick={() => addTask({list, setList, maxTasks})}
        >Add</button>
      </div>
    </div>
  )
}