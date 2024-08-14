import { useState } from "react";
import getDay from "../../../hooks/getDay";
import getLocalStorage from "../../../hooks/getLocalStorage";
import MainCard from "../MainCard/MainCard";
import "./Main.css"
import Card from "../Card/Card";

export default function Main() {
  const [day, setDay] = useState(getDay)
  const [sundayTasks, setSundayTasks] = useState(getLocalStorage("sunday"))
  const [mondayTasks, seMondayTasks] = useState(getLocalStorage("monday"))
  const [tuesdayTasks, setTuesdayTasks] = useState(getLocalStorage("tuesday"))
  const [wednesdayTasks, setWednesdayTasks] = useState(getLocalStorage("wednesday"))
  const [thursdayTasks, setThursdayTasks] = useState(getLocalStorage("thursday"))
  const [fridayTasks, setFridayTasks] = useState(getLocalStorage("friday"))
  const [saturdayTasks, setSaturdayTasks] = useState(getLocalStorage("saturday"))

  const list = getLocalStorage(day)
  return (
    <main>
      <MainCard name={day} taskList={sundayTasks} setTaskList={setSundayTasks}/>
      <div className="week">
      <Card name={"sunday"} list={sundayTasks} />
      <Card name={"monday"} list={mondayTasks} />
      <Card name={"tuesday"} list={tuesdayTasks} />
      <Card name={"wednesday"} list={wednesdayTasks} />
      <Card name={"thursday"} list={thursdayTasks} />
      <Card name={"friday"} list={fridayTasks} />
      <Card name={"saturday"} list={saturdayTasks} />
    </div>
    </main>
  )
}