import { useRef } from "preact/hooks";
import { useMouse } from "react-use";

import crabBody from "@/assets/crabBody.png";
import StylerComponent from "@/components/StylerComponent";

import style from "./crab.scss?inline";

export default function Crab() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const { elX: leftEyeElX, elY: leftEyeElY } = useMouse(leftEyeRef);
  const { elX: rightEyeElX, elY: rightEyeElY } = useMouse(rightEyeRef);

  const leftRad = Math.atan2(leftEyeElX, leftEyeElY) * -1 + Math.PI;
  const rightRad = Math.atan2(rightEyeElX, rightEyeElY) * -1 + Math.PI;

  return <StylerComponent style={style}>
    <div class="Crab">
      <div class="Crab__body">
        <img
          src={crabBody}
          class="Crab__body__itself"
        />
        <div class="Crab__body__eyes">
          <div
            ref={leftEyeRef}
            class="Crab__body__eyes__eye -left"
            style={{
              transform: `rotate(${leftRad}rad)`
            }}
          />
          <div
            ref={rightEyeRef}
            class="Crab__body__eyes__eye -right"
            style={{
              transform: `rotate(${rightRad}rad)`
            }}
          />
        </div>
      </div>
    </div>
  </StylerComponent>;
}
