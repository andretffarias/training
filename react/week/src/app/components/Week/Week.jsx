import Card from "../Card/Card";
import "./Week.css"

export default function Week() {
  return (
    <div className="week">
      <Card nameDay={"sunday"} />
      <Card nameDay={"monday"} />
      <Card nameDay={"tuesday"} />
      <Card nameDay={"wednesday"} />
      <Card nameDay={"thursday"} />
      <Card nameDay={"friday"} />
      <Card nameDay={"saturday"} />
    </div>
  );
}
