import SectionTitle from "./SectionTitle";

export default function Team(){
    return(<>
    <div className="flex flex-col justify-center items-center p-10 mb-10 relative overflow-hidden">
            <SectionTitle small={"Ekip"} title={"Kadromuz"} />
            <div className="grid items-center lg:grid-cols-3 gap-6">
              <div className="flex flex-col gap-6 relative w-full shadow-lg justify-center items-center p-10">
                <div className="avatar">
                  <div className="size-56 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="flex-flex-col gap-3 mb-12">
                  <h3 className="font-bold text-lg">Anjelina Kapry</h3>
                  <p className="text-accent">Kıdemli Öğretmen</p>
                </div>
                <div className="flex bg-accent absolute bottom-0 p-3 w-full justify-center gap-6">
                  <div className="rounded-full bg-white w-fit p-2 flex justify-center items-center">
                    <span className="icon-[tabler--brand-facebook] hover:text-primary  text-gray-400 size-5"></span>
                  </div>
                  <div className="rounded-full bg-white w-fit p-2 flex justify-center items-center">
                    <span className="icon-[tabler--brand-twitter] hover:text-primary  text-gray-400 size-5"></span>
                  </div>
                  <div className="rounded-full bg-white w-fit p-2 flex justify-center items-center">
                    <span className="icon-[tabler--brand-google] hover:text-primary  text-gray-400 size-5"></span>
                  </div>
                  <div className="rounded-full bg-white w-fit p-2 flex justify-center items-center">
                    <span className="icon-[tabler--brand-linkedin] hover:text-primary  text-gray-400 size-5"></span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 relative w-full shadow-lg justify-center items-center p-10">
                <div className="avatar">
                  <div className="size-56 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="flex-flex-col gap-3 mb-12">
                  <h3 className="font-bold text-lg">Martin Luther</h3>
                  <p className="text-accent">Baş Öğretmen</p>
                </div>
                <div className="flex bg-accent absolute bottom-0 p-3 w-full justify-center gap-6">
                  <div className="rounded-full bg-white w-fit p-2 flex justify-center items-center">
                    <span className="icon-[tabler--brand-facebook] hover:text-primary  text-gray-400 size-5"></span>
                  </div>
                  <div className="rounded-full bg-white w-fit p-2 flex justify-center items-center">
                    <span className="icon-[tabler--brand-twitter] hover:text-primary  text-gray-400 size-5"></span>
                  </div>
                  <div className="rounded-full bg-white w-fit p-2 flex justify-center items-center">
                    <span className="icon-[tabler--brand-google] hover:text-primary  text-gray-400 size-5"></span>
                  </div>
                  <div className="rounded-full bg-white w-fit p-2 flex justify-center items-center">
                    <span className="icon-[tabler--brand-linkedin] hover:text-primary  text-gray-400 size-5"></span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 relative w-full shadow-lg justify-center items-center p-10">
                <div className="avatar">
                  <div className="size-56 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="flex-flex-col gap-3 mb-12">
                  <h3 className="font-bold text-lg">Mrs Barbara</h3>
                  <p className="text-accent">Yardımcı Öğretmen</p>
                </div>
                <div className="flex bg-accent absolute bottom-0 p-3 w-full justify-center gap-6">
                  <div className="rounded-full bg-white w-fit p-2 flex justify-center items-center">
                    <span className="icon-[tabler--brand-facebook] hover:text-primary  text-gray-400 size-5"></span>
                  </div>
                  <div className="rounded-full bg-white w-fit p-2 flex justify-center items-center">
                    <span className="icon-[tabler--brand-twitter] hover:text-primary  text-gray-400 size-5"></span>
                  </div>
                  <div className="rounded-full bg-white w-fit p-2 flex justify-center items-center">
                    <span className="icon-[tabler--brand-google] hover:text-primary  text-gray-400 size-5"></span>
                  </div>
                  <div className="rounded-full bg-white w-fit p-2 flex justify-center items-center">
                    <span className="icon-[tabler--brand-linkedin] hover:text-primary  text-gray-400 size-5"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>)
}