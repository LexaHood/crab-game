import StylerComponent from "@/components/StylerComponent";

import style from "./ui.scss?inline";

export default function Ui() {
  return <StylerComponent style={style}>
    <div class='Ui' />
  </StylerComponent>;
}
