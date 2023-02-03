import { useState } from 'preact/hooks'
import reactLogo from './assets/react.svg'
import style from './App.css?inline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="App">
      <style>{style}</style>

      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} class="logo" alt="React logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
