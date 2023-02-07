import type { StateUpdater } from 'preact/hooks'
import StylerComponent from '@/components/StylerComponent'
import style from './style.scss?inline'
import industrialBackground from '@/assets/industrial-background.jpg'

import type { screens } from '@/App'

export default function ({ setScreen }: { setScreen: StateUpdater<keyof typeof screens> }) {
  return <StylerComponent style={style}>
    <div class="StartScreen">
      <img class="StartScreen__bg" src={industrialBackground} />
      <h1 class="StartScreen__title">
        Веселый краб
      </h1>

      <button
        onClick={() => setScreen('gameScreen')}
        class="StartScreen__startButton"
      >
        Начать игру
      </button>
    </div>
  </StylerComponent>
}