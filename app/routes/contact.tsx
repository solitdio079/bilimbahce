import img03 from "../routes/images/03.png";
import minik from "./images/minikler-1.png";
import shape from "./images/shape.png";
import baby from "./images/baby.png";
import cloud from "./images/cloud.png";
import dog from "./images/dog.png";
import heart from "./images/heart.png";
import Breadcrumb from "~/components/Breadcrumb";
export default function Contact() {
  return (
    <>
    <Breadcrumb title={"İletişim"} />
      <div className="bg-base-200 py-8 sm:py-16 lg:py-24">
        <div className="mx-auto relative max-w-7xl px-4 sm:px-6 lg:px-8 motion-opacity-in-0 motion-translate-y-in-100 motion-blur-in-md">
         
          <img src={baby} className="absolute w-15 top-25 left-10 -z-1" />
        <img src={dog} className="absolute w-15 bottom-25 left-10 -z-1" />
        <img src={heart} className="absolute w-15 top-25 left-250 -z-1" />
        <img src={cloud} className="absolute w-15 top-25 left-120 -z-1" />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <img src={img03} alt="Contact illustration" className="size-full" />

            <div>
              <h3 className="text-base-content mb-6 text-2xl font-semibold">
                Yardımcı olmaktan mutluluk duyarız!
              </h3>
              <p className="text-base-content/80 mb-10 text-lg font-medium">
                Bilim Bahçe Kampüsü olarak çocuklarımızın güvenli, mutlu ve
                merak dolu bir ortamda büyümesini önemsiyoruz. Bizimle iletişime
                geçerek eğitim programlarımız, kayıt süreci ve kampüsümüz
                hakkında detaylı bilgi alabilirsiniz. Sorularınızı yanıtlamaktan
                ve sizi aramızda görmekten mutluluk duyarız.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="card shadow-none">
                  <div className="card-body items-center gap-3">
                    <div className="avatar avatar-placeholder">
                      <div className="border-primary/20 text-primary w-9 rounded-full border">
                        <span className="icon-[tabler--clock] text-primary size-6"></span>
                      </div>
                    </div>
                    <h4 className="text-base-content text-lg font-medium">
                    Ofis Saatleri

                    </h4>
                    <div className="text-center">
                      <p className="text-base-content/80">Monday-Friday</p>
                      <p className="text-base-content/80">8:00 am to 5:00 pm</p>
                    </div>
                  </div>
                </div>

                <div className="card shadow-none">
                  <div className="card-body items-center gap-3">
                    <div className="avatar avatar-placeholder">
                      <div className="border-primary/20 text-primary w-9 rounded-full border">
                        <span className="icon-[tabler--map-pin] text-primary size-6"></span>
                      </div>
                    </div>
                    <h4 className="text-base-content text-lg font-medium">
                    Adresimiz

                    </h4>
                    <address className="text-base-content/80 text-center not-italic">
                      802 Pension Rd,Maine
                      <br />
                      96812, USA
                    </address>
                  </div>
                </div>

                <div className="card shadow-none">
                  <div className="card-body items-center gap-3">
                    <div className="avatar avatar-placeholder">
                      <div className="border-primary/20 text-primary w-9 rounded-full border">
                        <span className="icon-[tabler--briefcase] text-primary size-6"></span>
                      </div>
                    </div>
                    <h4 className="text-base-content text-lg font-medium">
                    E posta

                    </h4>
                    <address className="text-base-content/80 text-center not-italic">
                      802 Pension Rd,Maine
                      <br />
                      96812, USA
                    </address>
                  </div>
                </div>

                <div className="card shadow-none">
                  <div className="card-body items-center gap-3">
                    <div className="avatar avatar-placeholder">
                      <div className="border-primary/20 text-primary w-9 rounded-full border">
                        <span className="icon-[tabler--phone] text-primary size-6"></span>
                      </div>
                    </div>
                    <h4 className="text-base-content text-lg font-medium">
                    Telefonumuz
                    </h4>
                    <div className="text-center">
                      <p className="text-base-content/80">+1-316-688-5685</p>
                      <p className="text-base-content/80">+1-316-477-0169</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            className="h-80 lg:h-[600px]"
            src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">
              Carte démographique
            </a>
          </iframe>
        </div>
      </div>
    </>
  );
}
