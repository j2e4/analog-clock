import "./Tooltip.css";

import { useRecoilValue } from "recoil";
import { tooltipPosState } from "../states/tooltip";

function Tooltip({ children }) {
  const [x, y] = useRecoilValue(tooltipPosState);

  return (
    <div
      role="tooltip"
      className="tooltip"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    >
      {children}
    </div>
  );
}

export default Tooltip;
