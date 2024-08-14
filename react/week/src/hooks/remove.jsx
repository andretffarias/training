import saveLocalStorage from "./saveLocalStorage"

export default function removeTask(name, list, setList, index) {
  const updatedList = list.filter((_, i) => i !== index)
  setList(updatedList)
  saveLocalStorage(name, updatedList)
}