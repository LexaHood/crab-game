import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

class Game extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const root = ReactDOM.createRoot(mountPoint);
    root.render(<App />);
  }
}

customElements.define('x-game', Game);

if (import.meta.env.DEV) {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
