import type {  Tdimensions } from "@/App";
import StylerComponent from "@/components/StylerComponent";

import Fish from "./Fish";
import style from "./fishes.scss?inline";

export default function Fishes({ dimensions }: {dimensions: Tdimensions, }) {
  const fishTotalAmount = 20;
  const fishes = [];
  for (let i = 0; i <= fishTotalAmount; i += 1) {
    fishes.push(<Fish dimensions={dimensions} />);
  }

  return <StylerComponent style={style}>
    {dimensions && fishes.map((fish) => {
      return fish;
    })}
  </StylerComponent>;
}
