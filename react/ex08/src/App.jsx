import { useState } from "react";
import "./App.css";

export default function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("copy");
  const [passwordSize, setPasswordSize] = useState(12)
  const [showInput, setShowInput] = useState(false)

  function generetePassword() {
    const characters =
      "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
    let newPassword = "";

    for (let i = 0; i < passwordSize; i++) {
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
      <div>
        <label htmlFor="show-input">Customize size:</label>
        <input 
          type="checkbox" 
          id="show-input" 
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>
      {showInput ? (<div>
        <label htmlFor="passwordSize">Size:</label>
        <input 
          type="number" 
          id="passwordSize" 
          min={1} 
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)}
        />
      </div>) : null}
      <button onClick={generetePassword}>create {showInput ? passwordSize : 8} characters password</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <p>{password}</p>
    </>
  );
}
