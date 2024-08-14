export default function getDay() {
  const date = new Date();
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  return daysOfWeek[date.getDay()];
}
