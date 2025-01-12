import PageHeader from "../Layouts/PageHeader";
import { useLocation } from "react-router-dom";

function Description(props: any) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name");
  const description = searchParams.get("description");
  const imgSrc = searchParams.get("imgSrc");
  const price = searchParams.get("price");
  const paragraphs = description?.split("\n");

  return (
    <>
      <PageHeader title={name} subtitle="Our services" />
      <section className="section about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-sm-6">
              <div className=" mt-4 mt-lg-0">
                <img src={imgSrc ?? undefined} className="img-fluid rounded-3" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-content pl-4 mt-4 mt-lg-0">
                {paragraphs &&
                  paragraphs.map((paragraph: string, index: number) => (
                    <p key={index} className="mb-3">
                      {paragraph}
                    </p>
                  ))}
                <h5>Price : {price}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Description;
