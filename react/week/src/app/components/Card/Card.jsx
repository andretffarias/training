import "./Card.css";

export default function Card({ name, list }) {
  return (
    <div className="card">
      <div className="headerCard">
        <h3>{name}</h3>
      </div>
      <div className="taskList">
        {list.slice(0, 6).map((task, index) => (
          <div key={index}>
            <div>
              {index + 1 + ". "}
              {task}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
