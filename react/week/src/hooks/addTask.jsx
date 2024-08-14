export default function addTask(list, setList, maxTasks) {
  if (list.length < maxTasks) {
    setList([...list, ""]);
  } else {
    alert("You have reached the maximum limit of 20 tasks.");
  }
}
