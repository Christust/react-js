import routerList from "../../constants/navigation/routerList";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBarComponent() {
  let location = useLocation();

  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={""}>
            Moderatorem
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              {routerList.map((route) => {
                return (
                  <Link
                    className={`nav-link ${
                      location.pathname.slice(1) === route.pathname
                        ? "active"
                        : ""
                    }`}
                    to={route.pathname}
                  >
                    {route.label}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarComponent;
