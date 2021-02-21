import { createGlobalStyle } from "styled-components";

import NotoSans from "../assets/Noto_Sans/NotoSans-Regular.ttf";
import CrimsonText from "../assets/Noto_Sans/CrimsonText-Regular.ttf";

const Typography = createGlobalStyle`
  @font-face {
    font-family: Noto Sans;
    src: url(${NotoSans});
  }
  @font-face {
    font-family: Crimson Text;
    src: url(${CrimsonText});
  }
`;

export default Typography;
