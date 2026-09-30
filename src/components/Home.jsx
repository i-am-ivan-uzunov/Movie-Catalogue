export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-12 m-auto">
                <div className="heroText">
                  <h1 className="text-white mb-lg-5 mb-3">Delicious Steaks</h1>

                  <div className="c-reviews my-3 d-flex flex-wrap align-items-center">
                    <div className="d-flex flex-wrap align-items-center">
                      <h4 className="text-white mb-0 me-3">4.4/5</h4>

                      <div className="reviews-stars">
                        <i className="bi-star-fill reviews-icon"></i>
                        <i className="bi-star-fill reviews-icon"></i>
                        <i className="bi-star-fill reviews-icon"></i>
                        <i className="bi-star-fill reviews-icon"></i>
                        <i className="bi-star reviews-icon"></i>
                      </div>
                    </div>

                    <p className="text-white w-100">
                      From <strong>1,206+</strong> Customer Reviews
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-12">
                <div
                  id="carouselExampleCaptions"
                  className="carousel carousel-fade hero-carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="carousel-image-wrap">
                        <img
                          src="images/slide/jay-wennington-N_Y88TWmGwA-unsplash.jpg"
                          className="img-fluid carousel-image"
                          alt=""
                        />
                      </div>

                      <div className="carousel-caption">
                        <span className="text-white">
                          <i className="bi-geo-alt me-2"></i>
                          Manhattan, New York
                        </span>

                        <h4 className="hero-text">Fine Dining Restaurant</h4>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="carousel-image-wrap">
                        <img
                          src="images/slide/jason-leung-O67LZfeyYBk-unsplash.jpg"
                          className="img-fluid carousel-image"
                          alt=""
                        />
                      </div>

                      <div className="carousel-caption">
                        <div className="d-flex align-items-center">
                          <h4 className="hero-text">Steak</h4>

                          <span className="price-tag ms-4">
                            <small>$</small>26.50
                          </span>
                        </div>

                        <div className="d-flex flex-wrap align-items-center">
                          <h5 className="reviews-text mb-0 me-3">3.8/5</h5>

                          <div className="reviews-stars">
                            <i className="bi-star-fill reviews-icon"></i>
                            <i className="bi-star-fill reviews-icon"></i>
                            <i className="bi-star-fill reviews-icon"></i>
                            <i className="bi-star reviews-icon"></i>
                            <i className="bi-star reviews-icon"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="carousel-image-wrap">
                        <img
                          src="images/slide/ivan-torres-MQUqbmszGGM-unsplash.jpg"
                          className="img-fluid carousel-image"
                          alt=""
                        />
                      </div>

                      <div className="carousel-caption">
                        <div className="d-flex align-items-center">
                          <h4 className="hero-text">Sausage Pasta</h4>

                          <span className="price-tag ms-4">
                            <small>$</small>18.25
                          </span>
                        </div>

                        <div className="d-flex flex-wrap align-items-center">
                          <h5 className="reviews-text mb-0 me-3">4.2/5</h5>

                          <div className="reviews-stars">
                            <i className="bi-star-fill reviews-icon"></i>
                            <i className="bi-star-fill reviews-icon"></i>
                            <i className="bi-star-fill reviews-icon"></i>
                            <i className="bi-star-fill reviews-icon"></i>
                            <i className="bi-star reviews-icon"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>

                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="video-wrap">
            <video
              autoPlay=""
              loop=""
              muted=""
              className="custom-video"
              poster=""
            >
              <source src="video/production_ID_3769033.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="overlay"></div>
        </section>

        <section className="BgImage"></section>
      </main>
    </>
  );
}
