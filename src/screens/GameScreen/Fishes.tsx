import StylerComponent from "@/components/StylerComponent";

import Fish from "./Fish";
import style from "./fishes.scss?inline";

export default function Fishes() {
  const fishTotalAmount = 10;
  const fishes = [];
  for (let i = 0; i < fishTotalAmount; i += 1) {
    fishes.push(<Fish />);
  }

  return <StylerComponent style={style}>
    {fishes.map((fish) => {
      return fish;
    })}
  </StylerComponent>;
}
