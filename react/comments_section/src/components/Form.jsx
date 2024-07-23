import { useState } from "react";
import Input from "./Input";

export default function Form({comments, setComments}) {
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  
  const handleSubmit = (ev) => {
      ev.preventDefault()

      const newComment = {
        id: Math.random() * 1000000,
        author: author,
        content: content,
        createdAt: new Date()
      }

      setComments((state) => [newComment, ...state])
      setAuthor("")
      setContent("")
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <Input 
        id="email-input" 
        label="Email:" 
        typeInput="text" 
        value={author}
        onChange={(ev) => setAuthor(ev.target.value)}
      />
      <Input 
        id="comment-input" 
        label="Comment:" 
        typeInput="textarea" 
        value={content}
        onChange={(ev) => setContent(ev.target.value)}
      />
      <button type="submit">send comment</button>
    </form>
  );
}
