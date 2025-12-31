import breadcrumb from "../routes/images/breadcrumb.jpg";

export default function Breadcrumb({title}){
    return (<>
     <div className="flex flex-col justify-center items-center p-10 mb-10 relative overflow-hidden">
        <img
          src={breadcrumb}
          className="absolute z-0 top-0 w-full left-0"
          alt=""
        />
        <span className="absolute z-0 top-0 left-0 h-full w-full bg-primary/50"></span>
        <div className="flex z-5 flex-col gap-3 justify-center items-center p-10">
          <h1 className="text-6xl text-white font-black"> {title} </h1>
          <p className="flex items-center text-white font-bold gap-6">
            <span className="text-accent flex items-center gap-3">
              {" "}
              Ana Sayfa <span className="icon-[tabler--arrow-right]"></span>
            </span>{" "}
           {title}
          </p>
        </div>
      </div>
    </>)
}