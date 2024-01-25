import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { currentDateState, currentTimeUnitsState } from '../states/datetime';
import ClockHand from './ClockHand';

const CLOCK_HOURS = 12;
const CLOCK_MINUTES = 60;
const CLOCK_SECONDS = 60;

function Clock() {
  const [h, m, s] = useRecoilValue(currentTimeUnitsState);
  const setCurrentTime = useSetRecoilState(currentDateState);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(date => new Date(date.getTime() + 1000));
    }, 1000);
    return () => {
      clearTimeout(intervalId);
    };
  }, [setCurrentTime]);

  return (
    <div
      style={{
        position: 'relative',
        width: '50vw',
        height: '50vw',
        backgroundColor: '#e1dcd9',
        borderRadius: '100%',
      }}
    >
      <ClockHand totalDegree={CLOCK_HOURS} currentDegree={h} />
      <ClockHand totalDegree={CLOCK_MINUTES} currentDegree={m} />
      <ClockHand totalDegree={CLOCK_SECONDS} currentDegree={s} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '2vw',
          height: '2vw',
          backgroundColor: '#32435f',
          borderRadius: '100%',
        }}
      />
    </div>
  );
}

export default Clock;
