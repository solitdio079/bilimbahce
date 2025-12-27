import { Fragment } from "react/jsx-runtime";
import lineBorder from "../routes/images/line-border.png";

export default function SectionTitle({ small, title, textColor = "" }) {
  if (textColor) {
    return (
      <>
        <h6 className={`text-sm text-${textColor} z-1`}> {small} </h6>
        <h1 className={`text-5xl font-bold text-${textColor} z-1`}>
          {" "}
          {title}{" "}
        </h1>
        <img src={lineBorder} className={`w-40 my-6 z-1`} alt="" />
      </>
    );
  }
  return (
    <>
      <h6 className="text-sm text-primary z-1"> {small} </h6>
      <h1 className="text-5xl font-bold z-1"> {title} </h1>
      <img src={lineBorder} className="w-40 my-6 z-1" alt="" />
    </>
  );
}
