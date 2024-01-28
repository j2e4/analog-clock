import "./ClockHand.css";

import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentHourState,
  currentMinuteState,
  currentSecondState,
  currentTimeState,
} from "../states/datetime";

function ClockHandRoot({ currentDegree, totalDegree, className }) {
  const deg = (currentDegree / totalDegree) * 360;

  return (
    <div
      className={["clock-hand", className].join(" ")}
      style={{
        transform: `translateX(-50%) rotate(${deg}deg)`,
      }}
    />
  );
}

function ClockHandHour() {
  const hour = useRecoilValue(currentHourState) % 12;
  const minute = useRecoilValue(currentMinuteState);

  return (
    <ClockHand
      // 현재 몇 분인지 고려해 각도를 좀 더 준다.
      currentDegree={hour + minute / 60}
      totalDegree={12}
      className="hour-hand"
    />
  );
}

function ClockHandMinute() {
  const minute = useRecoilValue(currentMinuteState);

  return (
    <ClockHand
      currentDegree={minute}
      totalDegree={60}
      className="minute-hand"
    />
  );
}

function ClockHandSecond() {
  const second = useRecoilValue(currentSecondState);
  const setCurrentTime = useSetRecoilState(currentTimeState);

  useEffect(() => {
    // 현재 시간에서 다음 초까지 차이나는 밀리초 이후, 첫 번째 상태 업데이트를 한다.
    // 예를 들어 5.6초에서 첫 번째 렌더한 경우 0.4초 후에 6초로 업데이트한다.
    // 6.5초에서 6초로 업데이트하는 것보다 6초 근처에서 업데이트하는 게 더 정확하기 때문에 이렇게 한다.
    const firstTimeout = 1000 - (new Date().getTime() % 1000);

    let intervalId;
    const timeoutId = setTimeout(() => {
      setCurrentTime(new Date());

      // 첫 번째 상태 업데이트 후 1초마다 업데이트한다.
      intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
    }, firstTimeout);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId !== undefined) clearInterval(intervalId);
    };
  }, [setCurrentTime]);

  return (
    <ClockHand
      currentDegree={second}
      totalDegree={60}
      className="second-hand"
    />
  );
}

const ClockHand = Object.assign(ClockHandRoot, {
  Hour: ClockHandHour,
  Minute: ClockHandMinute,
  Second: ClockHandSecond,
});

export default ClockHand;
