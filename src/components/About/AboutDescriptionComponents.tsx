function AboutDescriptionComponents() {
  return (
    <>
      <section className="section about-page gray-bg">
        <div className="container">
          <div className="row align-items-start g-5">
            {/* Left: large editorial heading */}
            <div className="col-lg-4">
              <span className="subtitle d-block mb-3">Our Story</span>
              <h2 className="title-color" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.15 }}>
                Personal Care for Your Healthy Living
              </h2>
              <div className="divider mt-4"></div>
            </div>

            {/* Right: body paragraphs */}
            <div className="col-lg-8">
              <p style={{ fontSize: "16px", lineHeight: "1.85", marginBottom: "1.4rem" }}>
                At Santharpana Ayurveda Ashram, we take pride in being a government-registered Ayurvedic spa
                that offers a range of rejuvenating treatments. Whether you're looking for relief from stress,
                pain, or simply seeking to unwind, our spa services cater to your needs. Our team of expert
                therapists is trained in traditional Ayurvedic techniques and uses only natural ingredients
                to provide an authentic healing experience.
              </p>
              <p style={{ fontSize: "16px", lineHeight: "1.85" }}>
                In addition to our spa treatments, we offer a unique wellness experience amidst the lush
                greenery of our garden. Our serene environment offers the perfect escape from the hustle and
                bustle of daily life, allowing you to relax and rejuvenate both your body and mind. Immerse
                yourself in the tranquility of our garden and enjoy the therapeutic benefits of nature. At
                Santharpana Ayurveda Ashram, we are committed to providing a holistic healing experience
                that leaves you feeling refreshed and renewed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutDescriptionComponents;
