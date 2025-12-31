import type { Route } from "./+types/home";
//import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Bilim Bahçe Kampüsü - Ana Sayfa" },
    {
      name: "description",
      content: "Bilim Bahçe'nin resmi web sitesine hoş geldiniz!",
    },
  ];
}
import minik from "./images/minikler-1.png";
import shape from "./images/shape.png";
import baby from "./images/baby.png";
import cloud from "./images/cloud.png";
import dog from "./images/dog.png";
import heart from "./images/heart.png";

/* hero card */
import education from "./images/education.png";
import health from "./images/health.png";
import meal from "./images/meal.png";
import teddy from "./images/teddy.png";
import IconCard from "~/components/IconCard";

/*Home about section*/
import lineBorder from "./images/line-border.png";
import bgShape from "./images/bg-shapes-2.png";
import aboutShape from "./images/about-shape.png";
import happyChild from "./images/happy-child.png";

import triangle from "./images/triangle.png";
import plusShape from "./images/plus-shape.png";
import zigZag from "./images/zig-zag.png";
import SectionTitle from "~/components/SectionTitle";

/* Program  */
import baby01 from "./images/01.png";
import baby02 from "./images/02.png";
import baby03 from "./images/03.png";
import ProgramCard from "~/components/ProgramCard";
import ScrollCards from "~/components/ScrollCards";

/* 
Footer images
 */
import footerImg1 from "./images/footer-img01.png";
import footerImg2 from "./images/footer-img02.png";
import AboutDesc from "~/components/AboutDesc";
import Team from "~/components/Team";

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 relative justify-center items-center bg-secondary/65 p-10">
        <div className="flex flex-col items-center justify-center text-center md:text-left lg:justify-end lg:items-start gap-3 min-w-1/2">
          <h1 className="text-3xl lg:text-6xl font-black z-3">
            Sıcak ve Güvenli Bir Bakım Ortamı
          </h1>

          <p className="z-3">
            Minikleriniz için kaliteli bir kreş bulmanın ne kadar önemli
            olduğunu biliyoruz.
          </p>

          <button className="btn max-w-60 btn-lg btn-primary">
            Daha Fazla Bilgi
          </button>
        </div>

        <div className="flex justify-center relative">
          <img
            src={minik}
            className="w-full z-1 animate-bounce  animate-softbounce"
            alt=""
          />
          <img
            src={shape}
            className="absolute top-0 right-0 z-0 animate-softbounce"
            alt=""
          />
        </div>
        <img src={baby} className="absolute w-15 top-25 left-10 z-2" />
        <img src={dog} className="absolute w-15 bottom-25 left-10 z-2" />
        <img src={heart} className="absolute w-15 top-25 left-250 z-2" />
        <img src={cloud} className="absolute w-15 top-25 left-120 z-2" />
      </div>

      <div className="grid lg:grid-cols-4 gap-6 p-10 lg:-mt-20">
        <IconCard>
          <div className="flex relative justify-center items-center">
            <img src={education} className="w-30 z-1" alt="" />
            <span className="icon-[tabler--health-recognition] absolute z-2 mx-auto top-5 text-white size-10"></span>
          </div>

          <h2 className="font-bold text-primary text-2xl">Öğrenme & Eğlence</h2>
          <p className="text-sm ">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </IconCard>

        <IconCard>
          <div className="flex relative justify-center items-center">
            <img src={health} className="w-30 z-1" alt="" />
            <span className="icon-[tabler--meat] absolute z-2 mx-auto top-5 text-white size-10"></span>
          </div>

          <h2 className="font-bold text-primary text-2xl">Sağlıklı Beslenme</h2>
          <p className="text-sm ">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </IconCard>
        <IconCard>
          <div className="flex relative justify-center items-center">
            <img src={teddy} className="w-30 z-1" alt="" />
            <span className="icon-[tabler--chalkboard-teacher] absolute z-2 mx-auto top-5 text-white size-10"></span>
          </div>

          <h2 className="font-bold text-primary text-2xl">Uzman Öğretmenler</h2>
          <p className="text-sm ">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </IconCard>

        <IconCard>
          <div className="flex relative justify-center items-center">
            <img src={meal} className="w-30 z-1" alt="" />
            <span className="icon-[tabler--play-football] absolute z-2 mx-auto top-5 text-white size-10"></span>
          </div>

          <h2 className="font-bold text-primary text-2xl">Oyun Alanları</h2>
          <p className="text-sm ">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </IconCard>
      </div>

      <AboutDesc />

      <div className="flex flex-col bg-green-100 justify-center items-center py-10 px-5">
        <SectionTitle small={"Özellikler"} title={"Neden Bizi Seçmelisiniz?"} />

        <div className="grid items-center gap-6 lg:grid-cols-5 my-12 w-full">
          <div className="flex flex-col items-center gap-3">
            <div className="relative flex justify-center items-center w-fit rounded-full bg-purple-500 p-5 lg:p-10">
              <span className="icon-[tabler--bulb] hover:text-primary  text-white size-20"></span>
            </div>
            <h3 className="text-2xl font-bold text-center">
              Bilgi Odaklı Dersler
            </h3>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="relative flex justify-center items-center w-fit rounded-full bg-pink-500 p-5 lg:p-10">
              <span className="icon-[tabler--blocks] hover:text-primary  text-white size-20"></span>
            </div>
            <h3 className="text-2xl font-bold text-center">Tam Gün Eğitim</h3>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="relative flex justify-center items-center w-fit rounded-full bg-blue-500 p-5 lg:p-10">
              <span className="icon-[tabler--chalkboard-teacher] hover:text-primary  text-white size-20"></span>
            </div>
            <h3 className="text-2xl font-bold text-center">
              Alanında Uzman Öğretmenler
            </h3>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="relative flex justify-center items-center w-fit rounded-full bg-red-500 p-5 lg:p-10">
              <span className="icon-[tabler--play-basketball] hover:text-primary  text-white size-20"></span>
            </div>
            <h3 className="text-2xl font-bold text-center">Oyun Alanları</h3>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="relative flex justify-center items-center w-fit rounded-full bg-orange-500 p-5 lg:p-10">
              <span className="icon-[tabler--clock-question] hover:text-primary  text-white size-20"></span>
            </div>
            <h3 className="text-2xl font-bold text-center">
              Son Dakika Kayıt İmkanı
            </h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-10 mb-10">
        <SectionTitle small={"Program"} title={"Sınıf Programlarımız"} />
        <div className="grid items-center lg:grid-cols-3 gap-6 my-12">
          <ProgramCard cardImage={baby02} title={"Sayı Eşleştirme"} />
          <ProgramCard cardImage={baby03} title={"Kağıt Tabak Sanatı"} />
          <ProgramCard cardImage={baby01} title={"Kreş"} />
        </div>
        <button className="btn max-w-60 btn-lg btn-primary">
          {" "}
          Daha Fazla Bilgi
        </button>
      </div>

      <div className="flex flex-col justify-center items-center p-10 mb-10">
        <SectionTitle small={"Plan"} title={"Seans Planlarımız"} />

        <div className="grid items-center justify-center my-12 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center gap-6 bg-orange-500/80 text-white p-10">
            <h2 className="font-bold text-3xl">Sabah Seansı</h2>
            <h1 className="text-6xl text-center">$35</h1>
            <ul className="flex flex-col items-center gap-3 justify-center">
              <li>08:00 – 13:00 Bakım</li>
              <li>Günde 2 Öğün</li>
              <li>Fen Dersleri</li>
              <li>2 Eğitmen</li>
            </ul>
            <button className="btn max-w-30 btn-sm btn-primary">
              Planı Seç
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 bg-accent/80 text-white p-10">
            <h2 className="font-bold text-3xl">Öğleden Sonra Seansı</h2>
            <h1 className="text-6xl text-center">$55</h1>
            <ul className="flex flex-col items-center gap-3 justify-center">
              <li>08:00 – 13:00 Bakım</li>
              <li>Günde 2 Öğün</li>
              <li>Fen Dersleri</li>
              <li>2 Eğitmen</li>
            </ul>
            <button className="btn max-w-30 btn-sm btn-primary">
              Planı Seç
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 bg-purple-500/80 text-white p-10">
            <h2 className="font-bold text-3xl">Tam Gün Seansı</h2>
            <h1 className="text-6xl text-center">$65</h1>
            <ul className="flex flex-col items-center gap-3 justify-center">
              <li>08:00 – 13:00 Bakım</li>
              <li>Günde 2 Öğün</li>
              <li>Fen Dersleri</li>
              <li>2 Eğitmen</li>
            </ul>
            <button className="btn max-w-30 btn-sm btn-primary">
              Planı Seç
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-10 mb-10 relative overflow-hidden">
        <img src={baby03} className="absolute z-0 top-0 w-full left-0" alt="" />
        <span className="absolute z-0 top-0 left-0 h-full w-full bg-primary/50"></span>
        <SectionTitle
          small={"Yorumlar"}
          title={"Veliler Ne Diyor"}
          textColor={"white"}
        />
        <ScrollCards />
      </div>

      <Team/>

      <div className="lg:flex justify-between bg-gray-200 p-10 hidden">
        <img src={footerImg1} className="w-40" alt="" />
        <img src={footerImg1} className="w-40" alt="" />
        <img src={footerImg1} className="w-40" alt="" />
        <img src={footerImg2} className="w-40" alt="" />
        <img src={footerImg2} className="w-40" alt="" />
      </div>
    </>
  );
}
