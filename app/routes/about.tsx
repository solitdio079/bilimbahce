import AboutDesc from "~/components/AboutDesc";
import breadcrumb from "./images/breadcrumb.jpg";
import Team from "~/components/Team";
import SectionTitle from "~/components/SectionTitle";

import ico1 from "./images/ico1.png";
import ico2 from "./images/ico2.png";
import ico3 from "./images/ico3.png";
import about2 from "./images/about2.jpg";
import Services from "~/components/Services";
export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-10 mb-10 relative overflow-hidden">
        <img
          src={breadcrumb}
          className="absolute z-0 top-0 w-full left-0"
          alt=""
        />
        <span className="absolute z-0 top-0 left-0 h-full w-full bg-primary/50"></span>
        <div className="flex z-5 flex-col gap-3 justify-center items-center p-10">
          <h1 className="text-6xl text-white font-black">Hakkımızda</h1>
          <p className="flex items-center text-white font-bold gap-6">
            <span className="text-accent flex items-center gap-3">
              {" "}
              Ana Sayfa <span className="icon-[tabler--arrow-right]"></span>
            </span>{" "}
            Hakkımızda
          </p>
        </div>
      </div>

      <AboutDesc />
      <Services />

      <div className="flex bg-gray-200 lg:gap-20 p-10">
        <img src= {about2} className="hidden lg:-m-10 lg:max-w-1/2 lg:flex" />
        <div className="flex flex-col items-start justify-center flex-col-gap-6">
          <h1 className="font-black text-xl lg:text-4xl text-primary">
            Daycare is Great Kids Make it Special
          </h1>
          <p className="my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            incididunt labore et dolore magna aliqua..
          </p>
          <ul className="flex flex-col gap-3 pl-10">
            <li className="font-bold flex items-center">
              {" "}
              <span className="icon-[tabler--checkbox] text-primary"></span> Our
              Job is to make yur life easier.
            </li>

            <li className="font-bold flex items-center">
              <span className="icon-[tabler--checkbox] text-primary"></span>{" "}
              Experience childcare as it should be.
            </li>
            <li className="font-bold flex items-center">
              <span className="icon-[tabler--checkbox] text-primary"></span>
              Daycare is great....children make it special.
            </li>
            <li className="font-bold flex items-center">
              <span className="icon-[tabler--checkbox] text-primary"></span>We
              are childcare Professional.
            </li>
            <li className="font-bold flex items-center">
              <span className="icon-[tabler--checkbox] text-primary"></span>Your
              childcare wish just came true.
            </li>
            <li className="font-bold flex items-center">
              <span className="icon-[tabler--checkbox] text-primary"></span>
              Experience childcare as it should be
            </li>
          </ul>
          <button className="btn mt-6 max-w-60 btn-primary">
          {" "}
          Daha Fazla Bilgi
        </button>
        </div>
      </div>
      <Team />
    </>
  );
}
