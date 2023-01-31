import { useState } from 'react'
import reactLogo from './assets/react.svg'
import style from './App.css?inline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <style>{style}</style>

      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
