import type { StateUpdater } from 'preact/hooks'

import type { screens } from '../App'

export default function StartMenu({ setScreen }: { setScreen: StateUpdater<keyof typeof screens> }) {
  return (
    <div>
      Start menu

      <button
        onClick={() => setScreen('playing')}
      >
        Start game
      </button>
    </div>
  )
}