import { useEffect, useState } from "preact/hooks";

import StylerComponent from "@/components/StylerComponent";

import style from "./fish.scss?inline";

type Tcoords = {x: number, y: number};

// Todo: 
// - использовать ширину и высоту экрана

function getRandomCoords() {
  return {
    x: Math.random() * 300,
    y: Math.random() * 300,
  };
}

export default function Fish() {
  const [coords, setCoords] = useState<Tcoords>();
  let travelDuration = 10000;

  useEffect(() => {
    const startCoords: Tcoords = getRandomCoords();
    travelDuration = 3000 + Math.random() * 5000;
    
    setCoords(startCoords);
    updateSwimDestination();
  }, []);

  function updateSwimDestination() {
    setCoords(getRandomCoords());
    setTimeout(() => {
      updateSwimDestination();
    }, travelDuration);
  }

  return <StylerComponent style={style}>
    <div 
      class="Fish"
      style={{
        transform: `translate(${coords?.x}px, ${coords?.y}px)`,
        transition: `transform ${travelDuration}ms`
      }}
    >
    </div>
  </StylerComponent>;
}
