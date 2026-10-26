export default function Footer() {
  return (
    <footer className="bg-black text-white py-5 border-top border-secondary mt-auto">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-12">
            <h3 className="text-white fw-bold mb-3 tracking-wide">FlickHub</h3>
            <p className="text-muted mb-4 small">
              Your ultimate destination to discover, share, and track the best
              movies.
            </p>

            <ul className="list-unstyled d-flex justify-content-center gap-4 mb-4">
              <li>
                <a href="#" className="text-warning fs-4 text-decoration-none">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-warning fs-4 text-decoration-none">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-warning fs-4 text-decoration-none"
                >
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-warning fs-4 text-decoration-none">
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
            </ul>

            <hr className="border-secondary opacity-25 w-50 mx-auto my-4" />

            <p className="text-muted small mb-0">
              Copyright © {new Date().getFullYear()} FlickHub Co., Ltd. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
