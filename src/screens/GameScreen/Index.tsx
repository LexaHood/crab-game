import type { StateUpdater } from 'preact/hooks'
import StylerComponent from '@/components/StylerComponent'
import style from './style.scss?inline'
import type { screens } from '@/App'
import Crab from './Crab'
import Ui from './Ui'

export default function ({ setScreen }: { setScreen: StateUpdater<keyof typeof screens> }) {
  return <StylerComponent style={style}>
    <div class="GameScreen">
      <Ui />
      <Crab />
    </div>
  </StylerComponent>
}
