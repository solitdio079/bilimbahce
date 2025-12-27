export default function IconCard({children}){
    return (<>
     <div
          className="bg-white shadow-md flex gap-3 justify-center items-center text-center flex-col rounded-none z-4 relative p-8
  before:content-[''] before:absolute before:transition-all before:duration-500 before:top-0 before:left-0
  before:w-12 before:h-6 before:border-t-2 before:border-l-2 before:border-primary

  after:content-[''] after:absolute after:bottom-0 after:right-0 after:transition-all after:duration-500
  after:w-12 after:h-6 after:border-b-2 after:border-r-2 after:border-primary hover:before:w-full hover:before:h-full hover:after:w-full hover:after:h-full transition-all duration-500"
        >
        {children}
        </div>
    </>)
}