export default function getLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}
