import { Outlet } from "react-router-dom";
import Loader from "./components/loader/Loader";
import NavBarComponent from "./components/nagivation/NavBar";

function App() {
  return (
    <div>
      <NavBarComponent />
      <div className="container mt-5">
        <Outlet />
      </div>
      {/* TODO: Loader */}
      {false && <Loader />}
    </div>
  );
}

export default App;
