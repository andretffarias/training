import MainCard from "../MainCard/MainCard";
import Week from "../Week/Week";
import "./Main.css"

export default function Main() {
  return (
    <main>
      <MainCard name={"sunday"} taskList={["ot" ,"gg" ,"oi"]}/>
      <Week />
    </main>
  )
}