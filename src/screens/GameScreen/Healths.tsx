import { useEffect, useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";

import style from "./healths.scss?inline";
import Life from "./Life";

export default function Healths() {
  const [health, setHealth] = useState<number[]>([]);

  function spawnLife() {
    setHealth([...health, health.length]);
  }

  useEffect(() => {
    setTimeout(() => {
      spawnLife();
    }, 1000);
  });

  return <StylerComponent style={style}>
    <div class="Healths">
      {health.map((lifeId) => {
        return <Life key={lifeId}/>;
      })}
    </div>
  </StylerComponent>;
}

