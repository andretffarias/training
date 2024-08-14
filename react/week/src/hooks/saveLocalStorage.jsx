export default function  saveLocalStorage(name, taskList) {
  localStorage.setItem(name, JSON.stringify(taskList))
}