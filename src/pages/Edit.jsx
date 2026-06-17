import React, { useState, useEffect } from "react";
import TimerForm from "../components/TimerForm";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();

  const params = useParams();
  const [timer, setTimer] = useState({});

  useEffect(() => {
    const getTimer = async () => {
      const res = await fetch(`http://localhost:4000/api/timer/${params.id}`);
      const data = await res.json();
      setTimer(data);
    };
    getTimer();
  }, [params.id, timer]);

  const handleEdit = async (data) => {
    await fetch(`http://localhost:4000/api/edit/${timer._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    navigate(`/timer/${timer._id}`);
  };

  return (
    <div className="container mt-1">
      <Link onClick={() => navigate(-1)} className="btn btn-primary">
        Back
      </Link>
      <div className="mt-2">
        <TimerForm
          formTitle={"Edit Timer"}
          onSubmit={handleEdit}
          initialData={timer}
        />
      </div>
    </div>
  );
};

export default Edit;