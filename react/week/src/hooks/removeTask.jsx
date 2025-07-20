export default function removeTask(index, list) {
  const updatedList = list.filter((_, i) => i !== index)
  setList(updatedList)
}