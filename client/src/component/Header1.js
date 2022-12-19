import react from "react";
import "./Header1.css";

const Header1 = () => {
  return (
    <>
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            LAUNDRY
          </a>
          <ul id="navigation" className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Career
              </a>
            </li>
            <li  className="nav-item active">
              <a
                id="active" className="nav-link "
                aria-current="page"
                aria-selected="true"
                href="#"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
};

export default Header1;
