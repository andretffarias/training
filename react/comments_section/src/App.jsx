import { useState } from "react";
import Form from "./components/Form";
import Section from "./components/Section";

export default function App() {
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem("comments");
    if (!savedComments) return [];
    return JSON.parse(savedComments);
  });

  return (
    <div id="app">
      <h2>Comments section:</h2>
      <Form comments={comments} setComments={setComments} />
      <hr />
      <Section comments={comments} />
    </div>
  );
}
