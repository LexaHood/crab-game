import StylerComponent from "@/components/StylerComponent";
import { score } from "@/store";

import style from "./ui.scss?inline";

export default function Ui() {
  return <StylerComponent style={style}>
    <div class='Ui' />
    <p>Score: {score}</p>
  </StylerComponent>;
}
