import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DeleteComfirmation from "../components/DeleteComfirmation";

const Delete = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [timer, setTimer] = useState([]);

  useEffect(() => {
    const getTimer = async () => {
      const res = await fetch(`http://localhost:4000/api/timer/${params.id}`);
      const timer = await res.json();
      setTimer(timer);
    };
    getTimer();
  }, []);

  const handleDelete = (id) => {
    const deleteTimer = () => {
      fetch(`http://localhost:4000/api/delete/${id}`, {
        method: "DELETE",
      });
      navigate("/");
    };
    deleteTimer();
  };

  return (
    <div className="container mt-1">
      <div className="row">
        <div className="col-12">
          <DeleteComfirmation
            timerName={timer.timerName}
            onSubmit={() => handleDelete(timer._id)}
            noLink={"/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Delete;
