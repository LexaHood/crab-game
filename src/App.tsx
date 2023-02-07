import { useState } from 'preact/hooks'
import style from './App.css?inline'

import StartMenu from './screens/StartMenu'
import Playing from './screens/Playing/Index'

export const screens = {
  startMenu: StartMenu,
  playing: Playing
} as const

function App() {
  const [screen, setScreen] = useState<keyof typeof screens>('startMenu')

  const CurrentScreen = screens[screen]

  return (
    <>
      <style>{style}</style>

      <div class="GameApp">
        <CurrentScreen setScreen={setScreen} />
      </div>
    </>
  )
}

export default App
