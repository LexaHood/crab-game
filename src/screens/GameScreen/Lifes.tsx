import { useEffect, useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";

import Hp from "./Hp";
import style from "./lifes.scss?inline";

export default function Lifes() {
  const [health, setHealth] = useState<number[]>([]);

  function spawnLife() {
    console.log(health);

    setTimeout(() => {
      spawnLife();
    }, getRandomTime());

    setHealth((last) => {
      return last.concat([last.length]);
    });
  }

  function getRandomTime() {
    return (Math.random() * 20 + 5) * 1000;
  }

  useEffect(() => {
    spawnLife();
  }, []);

  return <StylerComponent style={style}>
    <div class="Healths">
      {health.map((lifeId) => {
        return <Hp key={lifeId}/>;
      })}
    </div>
  </StylerComponent>;
}

