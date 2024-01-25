function ClockHand({ totalDegree, currentDegree }) {
  const deg = currentDegree / totalDegree * 360;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        height: '25vw',
        border: '1px solid #32435f',
        boxSizing: 'border-box',
        transformOrigin: '0% 100%',
        transform: `rotate(${deg}deg)`,
      }}
    />
  );
}

export default ClockHand;
