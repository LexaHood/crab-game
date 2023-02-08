import { useMouse } from 'react-use'
import { useRef } from 'preact/hooks'
import StylerComponent from '@/components/StylerComponent'
import style from './crab.scss?inline'
import crabBody from '@/assets/crabBody.png'

export default function () {
  const leftEyeRef = useRef(null)
  const rightEyeRef = useRef(null)
  const { elX: leftEyeElX, elY: leftEyeElY } = useMouse(leftEyeRef)
  const { elX: rightEyeElX, elY: rightEyeElY } = useMouse(rightEyeRef)

  const leftRad = Math.atan2(leftEyeElX, leftEyeElY) * -1 + Math.PI
  const rightRad = Math.atan2(rightEyeElX, rightEyeElY) * -1 + Math.PI


  return <StylerComponent style={style}>
    <div class="Crab">
      <div class="Crab__body">
        <img
          src={crabBody}
          class="Crab__body__itself"
        ></img>
        <div class="Crab__body__eyes">
          <div
            ref={leftEyeRef}
            class="Crab__body__eyes__eye -left"
            style={{
              transform: `rotate(${leftRad}rad)`
            }}
          ></div>
          <div
            ref={rightEyeRef}
            class="Crab__body__eyes__eye -right"
            style={{
              transform: `rotate(${rightRad}rad)`
            }}
          ></div>
        </div>
      </div>
    </div>
  </StylerComponent>
}