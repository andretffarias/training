import { useState } from "react";

export default function App() {
  const [games, setGames] = useState(() => {
    const storageGames = localStorage.getItem("obc-game-lib")
    if (!storageGames) return [] 
    const gameArrey = JSON.parse(storageGames)
    return gameArrey
  })
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const addGame = ({title, cover}) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = { id, title, cover }
    setGames(state => {
      const newState = [...state, game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  const removeGame = (id) => {
    setGames(state => { 
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
      })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover })
    setTitle("");
    setCover("");
  };

  return (
    <div>
      <h1>Game Library</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="game-title">Title:</label>
          <input
            type="text"
            name="game-title"
            id="game-title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Cover</label>
          <input
            type="text"
            name="cover"
            id="cover"
            value={cover}
            onChange={(ev) => setCover(ev.target.value)}
          />
        </div>
        <button type="submit">submit</button>
      </form>
      <div className="games">
        <h2>Game list:</h2>
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt="" />
            <div>
              <h3>{game.title}</h3>
              <button onClick={() => removeGame(game.id)}>remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
