import React from "react";
import TimerForm from "../components/TimerForm";

export default {
  title: "TimerForm",
  component: TimerForm,
};

export const Card = () => (
  <TimerForm
    formTitle={"Edit Timer"}
    initialData={{
      timerName: "Girly Pop Timer",
      workTime: 25,
      breakTime: 5,
      backgroundImage: "/images/pinkpantheress.jpg",
      song: "https://www.youtube.com/embed/_W-8SSTfZR0?si=aBQlCdmRhScHf6OH",
    }}
  />
);
