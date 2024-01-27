import "./Clock.css";

import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentHourState,
  currentMinuteState,
  currentSecondState,
  currentTimeState,
} from "../states/datetime";
import { tooltipPosState } from "../states/tooltip";
import ClockHand from "./ClockHand";

const CLOCK_HOURS = 12;
const CLOCK_MINUTES = 60;
const CLOCK_SECONDS = 60;

function Clock() {
  const h = useRecoilValue(currentHourState);
  const m = useRecoilValue(currentMinuteState);
  const s = useRecoilValue(currentSecondState);
  const setCurrentTime = useSetRecoilState(currentTimeState);
  const setTooltipPos = useSetRecoilState(tooltipPosState);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime((date) => new Date(date.getTime() + 1000));
    }, 1000);
    return () => {
      clearTimeout(intervalId);
    };
  }, [setCurrentTime]);

  return (
    <div
      className="clock"
      onMouseMove={(e) => {
        const x = e.clientX + 20;
        const y = e.clientY - 40;
        setTooltipPos([x, y]);
      }}
    >
      <ClockHand totalDegree={CLOCK_HOURS} currentDegree={h} />
      <ClockHand totalDegree={CLOCK_MINUTES} currentDegree={m} />
      <ClockHand totalDegree={CLOCK_SECONDS} currentDegree={s} />
    </div>
  );
}

export default Clock;
