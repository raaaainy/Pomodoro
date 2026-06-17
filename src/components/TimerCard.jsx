import PropTypes from "prop-types";
import useTimer from "easytimer-react-hook";
import { useEffect } from "react";

const TimerCard = ({ minutes, timerTitle }) => {
  const [timer] = useTimer({
    countdown: true,
    startValues: { minutes: minutes, seconds: 0 },
  });

  useEffect(() => {
    if (minutes !== undefined) {
      timer.stop();
      timer.start({
        countdown: true,
        startValues: { minutes, seconds: 0 },
      });
      timer.pause();
    }
  }, [minutes]);

  const handleStart = () => {
    timer.start();
  };

  const handlePause = () => {
    timer.pause();
  };

  const handleReset = () => {
    timer.reset({
      countdown: true,
      startValues: { minutes: minutes, seconds: 0 },
    });
    timer.pause();
  };

  const time = timer.getTimeValues().toString();

  return (
    <>
      <div className="card mx-1">
        <div className="card-body text-center">
          <h1 className="card-title display-6 fw-bold">{timerTitle}</h1>
          <h1 className="display-1 text-black">{time}</h1>
          <div className="mt-4 g-2 row">
            <button className="btn btn-success me-1 col" onClick={handleStart}>
              Start
            </button>
            <button className="btn btn-danger me-1 col" onClick={handlePause}>
              Stop
            </button>
            <button className="btn btn-primary col" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

TimerCard.propTypes = {
  minutes: PropTypes.number,
  timerTitle: PropTypes.string,
};

export default TimerCard;
