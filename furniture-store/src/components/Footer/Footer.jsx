import { Link } from "react-router-dom";


export const Footer = () => {


    return (
<footer className="footer-section">
  <div className="container relative">
    <div className="sofa-img">
      <img src="images/sofa.png" alt="Image" className="img-fluid" />
    </div>
    <div className="row">
      <div className="col-lg-8">
      </div>
    </div>
    <div className="row g-5 mb-5">
      <div className="col-lg-4">
        <div className="mb-4 footer-logo-wrap">
          <a href="#" className="footer-logo">
            Furni<span>.</span>
          </a>
        </div>
        <p className="mb-4">
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis
          nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
          velit imperdiet dolor tempor tristique. Pellentesque habitant
        </p>
        <ul className="list-unstyled custom-social">
          <li>
            <Link to="https://github.com/ErikLozanov">
              <span className="fa-brands fa-github" />
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/erik-lozanov/">
              <span className="fa fa-brands fa-linkedin" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-lg-8">
        <div className="row links-wrap">
          <div className="col-6 col-sm-6 col-md-3">
            <ul className="list-unstyled">
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="contact-us">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="border-top copyright">
      <div className="row pt-4">
        <div className="col-lg-6">
          <p className="mb-2 text-center text-lg-start">
            Copyright ©. All Rights Reserved. — Designed with love by{" "}
            <a href="https://untree.co">Untree.co</a> Distributed By{" "}
            <a hreff="https://themewagon.com">ThemeWagon</a>{" "}
            {/* License information: https://untree.co/license/ */}
          </p>
        </div>
        <div className="col-lg-6 text-center text-lg-end">
          <ul className="list-unstyled d-inline-flex ms-auto">
            <li className="me-4">
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

    );
};