import { servicesImg } from "../../DataModel/GalleryModel";
import { img } from "../../utils/image";

function GalleryComponents() {
  return (
    <>
      <section className="section team">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <span className="subtitle d-block mb-3">Glimpses of Our Garden</span>
                <h2 className="mb-3">Gallery</h2>
                <div className="divider mx-auto"></div>
              </div>
            </div>
          </div>

          <div className="row g-3">
            {servicesImg.map((item, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={item.imgSrc}>
                <div className="team-block">
                  <img
                    src={img(item.imgSrc)}
                    className="gallery-img"
                    alt={`Santharpana Ayurveda Ashram, photo ${index + 1}`}
                    width={600}
                    height={600}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default GalleryComponents;
