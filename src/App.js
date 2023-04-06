import { Outlet } from "react-router-dom";
import NavBarComponent from "./components/nagivation/NavBar";

function App() {
  return (
    <div>
      <NavBarComponent />
      <div className="container mt-5">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
