import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SelectTimerCard from "../components/SelectTimerCard";

const Home = () => {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    const getTimers = async () => {
      const res = await fetch("http://localhost:4000/api/timers");
      const timers = await res.json();
      setTimers(timers);
    };
    getTimers();
  }, []);

  return (
    <div className="container mt-1">
      <Link to={"/create"} className="btn btn-primary">
        New Timer
      </Link>
      <div className="row mt-2">
        {timers.map((timer) => (
          <div key={timer._id} className="col-lg-3 col-md-4 col-sm-6 my-2">
            <SelectTimerCard
              timerName={timer.timerName}
              timeRatio={{
                workTime: timer.workTime,
                breakTime: timer.breakTime,
              }}
              viewLink={`/timer/${timer._id}`}
              deleteLink={`/delete/${timer._id}`}
              backgroundImage={timer.backgroundImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
