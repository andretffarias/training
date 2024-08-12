import "./Card.css"

export default function Card({ nameDay }) {
  return (
    <div className="card">
      <div className="headerCard">
        <p>{nameDay}</p>
      </div>
      <div className="taskList">
        <div>bla bla bla</div>
        <div>bla bla bla</div>
        <div>bla bla bla</div>
      </div>
    </div>
  );
}
