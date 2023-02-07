import type { StateUpdater } from 'preact/hooks'

import type { screens } from '@/App'

export default function ({ setScreen }: { setScreen: StateUpdater<keyof typeof screens> }) {
  return (
    <div>
      Playing!
    </div>
  )
}