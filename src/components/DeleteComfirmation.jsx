import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DeleteComfirmation = ({ onSubmit, timerName, noLink }) => {
  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <h1 className="text-center fw-bold text-black">Are you sure you want to delete "{timerName}"?</h1>
          <div className="d-flex justify-content-center">
            <input type="submit" className="btn btn-danger me-1" value={"Yes"} />
            <Link to={noLink} className="btn btn-primary">
              No
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

DeleteComfirmation.propTypes = {
  timerName: PropTypes.string,
  formAction: PropTypes.string,
  noLink: PropTypes.string,
};

export default DeleteComfirmation;
