import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import TimerCard from "../components/TimerCard";
import MusicPlayer from "../components/MusicPlayer";
import { useEffect, useState } from "react";

const Pomodoro = () => {
  const params = useParams();
  const [timer, setTimer] = useState({
    timerName: "",
    workTime: 0,
    breakTime: 0,
    backGroundImage: "",
    song: "",
  });

  useEffect(() => {
    const getTimer = async () => {
      const res = await fetch(`http://localhost:4000/api/timer/${params.id}`);
      const timer = await res.json();
      setTimer(timer);
    };
    getTimer();
  });

  return (
    <body style={{ backgroundImage: `url(${timer.backgroundImage})` }}>
      <div className="container mt-1">
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
        <h1 className="text-center display-5 bg-blur">{timer.timerName}</h1>
        <div className="d-flex justify-content-center mt-1">
          <MusicPlayer youtubeEmbed={timer.song} />
        </div>
        <div className="row mt-1">
          <div className="d-flex justify-content-center">
            <div className="col-md-4">
              <TimerCard timerTitle={"Work Timer"} minutes={timer.workTime} />
            </div>
            <div className="col-md-4">
              <TimerCard timerTitle={"Break Timer"} minutes={timer.breakTime} />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center my-3">
          <Link to={`/edit/${timer._id}`} className="btn btn-primary btn-lg">
            Edit
          </Link>
        </div>
      </div>
    </body>
  );
};

export default Pomodoro;
