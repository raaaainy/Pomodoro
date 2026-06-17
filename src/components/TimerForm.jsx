import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTimerSchema } from "../hooks/useTimerSchema";

const TimerForm = ({ initialData = {}, onSubmit, formTitle }) => {
  const { schema, defaults } = useTimerSchema({ data: initialData });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaults,
  });

  useEffect(() => {
    if (initialData?._id) {
      form.reset(defaults);
    }
  }, [initialData?._id]);

  return (
    <>
      <div className="card">
        <form className="row m-3" onSubmit={form.handleSubmit(onSubmit)}>
          <h1 className="text-center display-4 fw-bold">{formTitle}</h1>
          <div className="col-md-12">
            <label htmlFor="timerName">Timer Name</label>
            <input
              type="text"
              className="form-control"
              id="timerName"
              {...form.register("timerName")}
            />
            {form.formState.errors.timerName && (
              <span className="text-danger">
                {form.formState.errors.timerName.message}
              </span>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="workTime">Work Time</label>
            <input
              type="number"
              className="form-control"
              id="workTime"
              {...form.register("workTime", { valueAsNumber: true })}
            />
            {form.formState.errors.workTime && (
              <span className="text-danger">
                {form.formState.errors.workTime.message}
              </span>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="breakTime">Break Time</label>
            <input
              type="number"
              className="form-control"
              id="breakTime"
              {...form.register("breakTime", { valueAsNumber: true })}
            />
            {form.formState.errors.breakTime && (
              <span className="text-danger">
                {form.formState.errors.breakTime.message}
              </span>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="backgroundImage">Background Image</label>
            <select
              className="form-select"
              id="backgroundImage"
              {...form.register("backgroundImage")}
            >
              <option value={"/images/animal-crossing-wallpaper.jpg"}>
                Animal Crossing
              </option>
              <option value={"/images/backrooms.jpg"}>Backrooms</option>
              <option value={"/images/girly-pop.jpg"}>Girly Pop</option>
              <option value={"/images/frutiger-aero.jpg"}>Frutiger Aero</option>
              <option value={"/images/mint-chocolate-chip.jpg"}>
                Mint Chocolate Chip
              </option>
              <option value={"/images/strawberry.jpg"}>Strawberry</option>
              <option value={"/images/minecraft.jpg"}>Minecraft</option>
              <option value={"/images/kpop-demon-hunters.jpg"}>
                Kpop Demon Hunters
              </option>
              <option value={"/images/pinkpantheress.jpg"}>
                Pinkpantheress
              </option>
            </select>
            {form.formState.errors.backgroundImage && (
              <span className="text-danger">
                {form.formState.errors.backgroundImage.message}
              </span>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="song">Song</label>
            <select
              className="form-select"
              id="song"
              {...form.register("song")}
            >
              <option
                value={
                  "https://www.youtube.com/embed/LOZm56PndpY?si=bPOe4hos83AJaear"
                }
              >
                Animal Crossing
              </option>
              <option
                value={
                  "https://www.youtube.com/embed/e4Jxc4_5-Bo?si=_mZUoAA_OM78t3PR"
                }
              >
                Backrooms
              </option>
              <option
                value={
                  "https://www.youtube.com/embed/_W-8SSTfZR0?si=aBQlCdmRhScHf6OH"
                }
              >
                Girly Pop
              </option>
              <option
                value={
                  "https://www.youtube.com/embed/Cz2YCRmDOFk?si=gtdXuCEd0b0fDDJF"
                }
              >
                Frutiger Aero
              </option>
              <option
                value={
                  "https://www.youtube.com/embed/xurJv66rIQo?si=M8--_ziezjmdblJ0"
                }
              >
                Mint Chocolate Chip
              </option>
              <option
                value={
                  "https://www.youtube.com/embed/0UeusHi0EsI?si=-Po82sGgoPv38Ohp"
                }
              >
                Strawberry
              </option>
              <option
                value={
                  "https://www.youtube.com/embed/ANkxRGvl1VY?si=nKPJiDmgKRWKXY5r"
                }
              >
                Minecraft
              </option>
              <option
                value={
                  "https://www.youtube.com/embed/JaM-fXm3DTA?si=xf_kaOmPWPcCY1H2"
                }
              >
                Kpop Demon Hunters
              </option>
              <option
                value={
                  "https://www.youtube.com/embed/mIzGzdDfrIY?si=MwSMtwhR5x5x0lbK"
                }
              >
                Pinkpantheress
              </option>
            </select>
            {form.formState.errors.song && (
              <span className="text-danger">
                {form.formState.errors.song.message}
              </span>
            )}
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TimerForm;