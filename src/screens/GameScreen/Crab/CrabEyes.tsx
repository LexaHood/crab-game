import { useEffect, useRef, useState } from "preact/hooks";
import { useMouse } from "react-use";

import StylerComponent from "@/components/StylerComponent";

import style from "./crabEyes.scss?inline";

export default function CrabEyes() {
  const [eyeRadius, setEyeRadius] = useState<number>(0);
  const [eyeOffsetY, setEyeOffsetY] = useState<number>(0);
  const [leftEyeOffsetX, setLeftEyeOffsetX] = useState<number>(0);
  const [rightEyeOffsetX, setRightEyeOffsetX] = useState<number>(0);

  const eyesRef = useRef<HTMLDivElement>(null);
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);

  const { elX: mouseX, elY: mouseY } = useMouse(eyesRef);

  useEffect(() => {
    setEyeRadius((eyesRef.current as HTMLDivElement).clientWidth / 15);
    setEyeOffsetY((leftEyeRef.current as HTMLDivElement).offsetTop);
    setLeftEyeOffsetX((leftEyeRef.current as HTMLDivElement).offsetLeft);
    setRightEyeOffsetX((rightEyeRef.current as HTMLDivElement).offsetLeft);
  }, []);

  const leftX = () => {
    const constrain = eyeRadius * Math.cos(Math.atan2(eyeOffsetY - mouseY, leftEyeOffsetX - mouseX));
    return Math.max(-constrain, Math.min(constrain, mouseX - leftEyeOffsetX));
  };
  const leftY = () => {
    const constrain = eyeRadius * Math.sin(Math.atan2(eyeOffsetY - mouseY, leftEyeOffsetX - mouseX));
    return Math.max(-constrain, Math.min(constrain, mouseY - eyeOffsetY));
  };

  const leftCoords = () => {
    if ((Math.sqrt(Math.pow(mouseX - leftEyeOffsetX, 2) + Math.pow(mouseY - eyeOffsetY, 2))) > eyeRadius) {
      return { x: leftX(), y: leftY() };
    }
    return { x: mouseX - leftEyeOffsetX, y: mouseY - eyeOffsetY };
  };

  const rightX = () => {
    const constrain = eyeRadius * Math.cos(Math.atan2(eyeOffsetY - mouseY, rightEyeOffsetX - mouseX));
    return Math.max(-constrain, Math.min(constrain, mouseX - rightEyeOffsetX));
  };
  const rightY = () => {
    const constrain = eyeRadius * Math.sin(Math.atan2(eyeOffsetY - mouseY, rightEyeOffsetX - mouseX));
    return Math.max(-constrain, Math.min(constrain, mouseY - eyeOffsetY));
  };

  const rightCoords = () => {
    if ((Math.sqrt(Math.pow(mouseX - rightEyeOffsetX, 2) + Math.pow(mouseY - eyeOffsetY, 2))) > eyeRadius) {
      return { x: rightX(), y: rightY() };
    }
    return { x: mouseX - rightEyeOffsetX, y: mouseY - eyeOffsetY };
  };

  return <StylerComponent style={style}>
    <div 
      ref={eyesRef}
      class="CrabEyes"
    >
      <div
        ref={leftEyeRef}
        class="CrabEyes__eye -left"
        style={{
          transform: `translate(${leftCoords().x}px, ${leftCoords().y}px)`
        }}
      />
      <div
        ref={rightEyeRef}
        class="CrabEyes__eye -right"
        style={{
          transform: `translate(${rightCoords().x}px, ${rightCoords().y}px)`
        }}
      />
    </div>
  </StylerComponent>;
}
