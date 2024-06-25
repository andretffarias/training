import Title from "./componets/Title.jsx"
import { Subtitle } from "./componets/Subtitle.jsx"
import StatusText from "./componets/StatusText.jsx"
import styles from "./styles/App.module.css"

export default function App () {
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <StatusText />
    </div>
  )
}