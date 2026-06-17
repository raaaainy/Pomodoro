import TimerCard from "../components/TimerCard";

export default {
  title: "TimerCard",
  component: TimerCard,
};

export const Card = () => <TimerCard minutes={25} timerTitle={"Work Timer"} />;
