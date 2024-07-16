import { useState } from "react";
import "./App.css";

export default function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("copy");

  function generetePassword() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    const length = 12;
    let newPassword = "";

    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * characters.length);
      newPassword += characters[position];
    }
    setPassword(newPassword);
    setCopyText("copy");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("copied");
  }

  return (
    <>
      <h1>Password generator</h1>
      <div className="card">
        <button onClick={generetePassword}>create</button>
        <button onClick={copyToClipboard}>{copyText}</button>
        <p>{password}</p>
      </div>
    </>
  );
}
