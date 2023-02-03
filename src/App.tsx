import { useState } from 'preact/hooks'
import reactLogo from './assets/react.svg'
import style from './App.css?inline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <style>{style}</style>

      <div class="GameApp">
        <div>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} class="GameApp__logo" alt="React logo" />
          </a>
        </div>
        <h1>Vite + Preact</h1>
        <div class="GameApp__card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
