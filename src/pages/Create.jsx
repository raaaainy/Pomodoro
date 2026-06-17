import React, { useState } from "react";
import TimerForm from "../components/TimerForm";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    await fetch(`http://localhost:4000/api/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    navigate("/");
  };

  return (
    <div className="container">
      <Link onClick={() => navigate(-1)} className="btn btn-primary mt-1">
        Back
      </Link>
      <div className="mt-2">
        <TimerForm formTitle={"Create Timer"} onSubmit={handleCreate} />
      </div>
    </div>
  );
};

export default Create;
