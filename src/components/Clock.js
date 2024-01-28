import "./Clock.css";

import { useSetRecoilState } from "recoil";
import { tooltipPosState } from "../states/tooltip";
import ClockHand from "./ClockHand";

function Clock() {
  const setTooltipPos = useSetRecoilState(tooltipPosState);

  return (
    <div
      className="clock"
      onMouseMove={(e) => {
        const x = e.clientX + 20;
        const y = e.clientY - 40;
        setTooltipPos([x, y]);
      }}
    >
      <ClockHand.Hour />
      <ClockHand.Minute />
      <ClockHand.Second />
    </div>
  );
}

export default Clock;
