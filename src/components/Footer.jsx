export default function Footer() {
  return (
    <>
      <footer className="site-footer section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="text-white mb-4 me-5">FlickHub</h4>
            </div>

            

            <div className="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
              <p>
                Tel:{" "}
                <a href="tel: 010-02-0340" className="tel-link">
                  032 6589
                </a>
              </p>
            </div>

            <div className="col-lg-4 col-md-6 col-xs-12 tooplate-mt30">
              <h6 className="text-white mb-lg-4 mb-3">Social</h6>

              <ul className="social-icon">
                <li>
                  <a href="#" className="social-icon-link bi-facebook"></a>
                </li>

                <li>
                  <a href="#" className="social-icon-link bi-instagram"></a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/search?q=tooplate.com&src=typed_query&f=live"
                    target="_blank"
                    className="social-icon-link bi-twitter"
                  ></a>
                </li>

                <li>
                  <a href="#" className="social-icon-link bi-youtube"></a>
                </li>
              </ul>

              <p className="copyright-text tooplate-mt60">
                Copyright © 2022 FlickHub Co., Ltd.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
