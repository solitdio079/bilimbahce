export default function ProgramCard({ cardImage, title }) {
  return (
    <>
      <div className="flex gap-6 flex-col border-gray-300 border ">
        <div className="overflow-hidden h-fit">
        <img src={cardImage} className="w-full hover:scale-140 transition-all duration-300" alt="" />
        </div>
      
        <div className="flex flex-col gap-6 p-5">
          <h3 className="font-bold text-2xl hover:text-primary"> {title} </h3>
          <p>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            rem veniam voluptatibus dolores deleniti soluta minima!{" "}
          </p>
        </div>
        <div className="flex gap-6 p-2 items-center justify-center border-gray-300 border-t">
          <p>
            <span className="text-primary font-bold">Yaş:</span>{" "}
            <span className="text-gray-400 text-sm">2-4years</span>{" "}
          </p>
          <p>
            <span className="text-primary font-bold">Saat:</span>{" "}
            <span className="text-gray-400 text-sm">9.00 11.00</span>{" "}
          </p>
          <p>
            <span className="text-primary font-bold">Fiyat:</span>{" "}
            <span className="text-gray-400 text-sm">$20</span>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
