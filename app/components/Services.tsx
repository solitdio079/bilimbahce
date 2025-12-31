import ico1 from "../routes/images/ico1.png";
import ico2 from "../routes/images/ico2.png";
import ico3 from "../routes/images/ico3.png";
import SectionTitle from "./SectionTitle";

export default function Services(){
    return (<>
     <div className="flex flex-col p-10 items-center justify-center">
        <SectionTitle small={"Service"} title={"Servislerimiz"} />
        <div className="grid items-center gap-12 my-12 justify-center lg:grid-cols-3">
          <div className="flex gap-6">
            <div className="relative flex items-end justify-end min-w-15">
              <div className="absolute top-2 z-0 -left-4 w-15 h-15 rotate-45  hover:-rotate-45 transition-all duration-500 bg-yellow-300">
                <div className="absolute -top-4 z-1 left-2 w-15 h-15 rotate-90  transition-all duration-500 bg-yellow-500"></div>
              </div>

              <img src={ico1} className="w-12 z-3" alt="" />
            </div>

            <div className="flex flex-col z-5">
              <h1 className="font-bold text-yellow-500 text-lg">
                Baby Sitting
              </h1>
              <p className="text-gray-400 text-md">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                sint accusantium quod.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="relative flex items-end justify-end min-w-15">
            <div className="absolute top-2 z-0 -left-4 w-15 h-15 rotate-45  hover:-rotate-45 transition-all duration-500 bg-red-300">
                <div className="absolute -top-4 z-1 left-2 w-15 h-15 rotate-90  transition-all duration-500 bg-red-500"></div>
              </div>
              <img src={ico2} className="w-12 z-3" alt="" />
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-red-500 text-lg">Baby Sitting</h1>
              <p className="text-gray-400 text-md">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                sint accusantium quod.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="relative flex items-end justify-end min-w-15">
            <div className="absolute top-2 z-0 -left-4 w-15 h-15 rotate-45  hover:-rotate-45 transition-all duration-500 bg-purple-300">
                <div className="absolute -top-4 z-1 left-2 w-15 h-15 rotate-90  transition-all duration-500 bg-purple-500"></div>
              </div>
              <img src={ico3} className="w-12 z-3" alt="" />
            </div>

            <div className="flex flex-col">
              <h1 className="font-bold text-purple-500 text-lg">
                Baby Sitting
              </h1>
              <p className="text-gray-400 text-md">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                sint accusantium quod.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>)
}