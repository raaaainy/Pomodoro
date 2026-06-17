import SelectTimerCard from "../components/SelectTimerCard";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "SelectTimerCard",
  component: SelectTimerCard,
};

export const Card = () => (
  <BrowserRouter>
    <SelectTimerCard
      timerName={"Pomodoro Timer"}
      timeRatio={{
        workTime: 25,
        breakTime: 5,
      }}
      viewLink={"/#"}
      deleteLink={"/#"}
    />
  </BrowserRouter>
);
