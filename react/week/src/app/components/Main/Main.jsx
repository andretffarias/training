import { useState } from "react";
import getDay from "../../../hooks/getDay";
import getLocalStorage from "../../../hooks/getLocalStorage";
import MainCard from "../MainCard/MainCard";
import "./Main.css"

export default function Main() {
  const [day, setDay] = useState(getDay)
  const list = getLocalStorage(day)
  return (
    <main>
      <MainCard name={day} taskList={list} />
      
    </main>
  )
}