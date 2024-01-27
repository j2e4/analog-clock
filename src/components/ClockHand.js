import './ClockHand.css';

function ClockHand({ totalDegree, currentDegree }) {
  const deg = currentDegree / totalDegree * 360;

  return (
    <div
      className="clock-hand"
      style={{
        transform: `translateX(-50%) rotate(${deg}deg)`,
      }}
    />
  );
}

export default ClockHand;
