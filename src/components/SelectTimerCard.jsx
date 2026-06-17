import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SelectTimerCard = ({
  timerName,
  timeRatio,
  viewLink,
  deleteLink,
  backgroundImage,
}) => (
  <>
    <div className="card w-100 h-100">
      <div
        className="card-body text-center d-flex flex-column text-center rounded"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <h1 className="display-6 bg-blur">{timerName}</h1>
        <h1 className="display-1 mt-1 bg-blur">
          {timeRatio.workTime}/{timeRatio.breakTime}
        </h1>
        <div className="mt-auto g-2 row">
          <div className="d-flex align-items-end">
            <Link to={viewLink} className="btn btn-primary me-1 col">
              View
            </Link>
            <Link to={deleteLink} className="btn btn-danger col">
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

SelectTimerCard.propTypes = {
  timerName: PropTypes.string,
  timeRatio: PropTypes.shape({
    workTime: PropTypes.number,
    breakTime: PropTypes.number,
  }),
  viewLink: PropTypes.string,
  deleteLink: PropTypes.string,
};

export default SelectTimerCard;
