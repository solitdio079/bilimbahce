//import lineBorder from "./images/line-border.png";
import bgShape from "../routes/images/bg-shapes-2.png";
import aboutShape from "../routes/images/about-shape.png";
import happyChild from "../routes/images/happy-child.png";

import triangle from "../routes/images/triangle.png";
import plusShape from "../routes/images/plus-shape.png";
import zigZag from "../routes/images/zig-zag.png";
import SectionTitle from "~/components/SectionTitle";

export default function AboutDesc(){
    return(<> 
     <div className="flex p-5 lg:p-20 lg:px-25 relative">
        <div className="flex flex-col w-full gap-3 lg:max-w-1/2 z-1">
          <SectionTitle
            small={"Hakkımızda"}
            title={"Eğitimin Lideri Bebek Bakım Merkezine Hoş Geldiniz"}
          />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>

          <ul className="space-y-6 mt-6">
            <li>
              <h3 className="text-lg font-bold flex items-center gap-3">
                {" "}
                <span className="icon-[tabler--circle] hover:text-primary  text-gray-400 size-6"></span>{" "}
                Çocuğun Kişisel Gelişimini Destekleme
              </h3>
              <p className="pl-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </li>
            <li>
              <h3 className="text-lg font-bold flex items-center gap-3">
                {" "}
                <span className="icon-[tabler--circle] hover:text-primary  text-gray-400 size-6"></span>{" "}
                Profesyonel ve Alanında Uzman Öğretmenler
              </h3>
              <p className="pl-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </li>
            <li>
              <h3 className="text-lg font-bold flex items-center gap-3">
                {" "}
                <span className="icon-[tabler--circle] hover:text-primary  text-gray-400 size-6"></span>{" "}
                Çocuklar İçin Kapalı & Açık Oyun Alanları
              </h3>
              <p className="pl-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </li>
            <li>
              <h3 className="text-lg font-bold flex items-center gap-3">
                {" "}
                <span className="icon-[tabler--circle] hover:text-primary  text-gray-400 size-6"></span>{" "}
                Çocuklar İçin En İyi Eğitim Ortamı
              </h3>
              <p className="pl-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </li>
          </ul>
          <button className="btn max-w-60  my-6 btn-primary">
            Daha Fazla Bilgi
          </button>
        </div>
        <div className="relative hidden w-full md:flex md:justify-end">
          <img src={bgShape} className="w-full" alt="" />
          <img src={aboutShape} className="absolute bottom-5" alt="" />
          <img
            src={happyChild}
            className="absolute bottom-20 left-3 rounded-3xl"
            alt=""
          />
        </div>
        <img
          src={triangle}
          className="w-10 animate-spin z-0 absolute top-5 left-1/2 [animation-duration:3s]"
          alt=""
        />
        <img
          src={plusShape}
          className="w-10 animate-pulse hidden md:block z-0 absolute bottom-1/3 left-15 [animation-duration:3s]"
          alt=""
        />
        <img
          src={zigZag}
          className="w-15 animate-bounce z-0 absolute top-25 right-15 [animation-duration:3s]"
          alt=""
        />
      </div>
    </>)
}