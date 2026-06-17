import { useMemo } from "react";
import { z } from "zod";

export const useTimerSchema = ({ data = {} } = {}) => {
  return useMemo(() => {
    const schema = z.object({
      timerName: z.string().min(1, { message: "Please enter a timer name." }),
      workTime: z.number().min(1, { message: "Please enter a work time." }),
      breakTime: z.number().min(1, { message: "Please enter a break time." }),
      backgroundImage: z
        .string()
        .min(1, { message: "Please select a background image." }),
      song: z.string().min(1, { message: "Please select a song." }),
    });

    const defaults = {
      timerName: data?.timerName || "",
      workTime: data?.workTime || 0,
      breakTime: data?.breakTime || 0,
      backgroundImage: data?.backgroundImage || "",
      song: data?.song || "",
    };

    return { schema, defaults };
  }, [data]);
};
