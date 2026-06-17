import React from "react";
import DeleteComfirmation from "../components/DeleteComfirmation";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "DeleteComfirmation",
  component: DeleteComfirmation,
};

export const Delete = () => (
  <BrowserRouter>
    <DeleteComfirmation
      timerName={"Pomodoro Timer"}
      formAction={"/#"}
      noLink={"/#"}
    />
  </BrowserRouter>
);
