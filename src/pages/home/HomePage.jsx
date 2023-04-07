import React from "react";
import swal from "sweetalert";
import Button from '@mui/material/Button';


const HomePage = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card shadow-lg">
        <img
          src="https://e0.pxfuel.com/wallpapers/672/618/desktop-wallpaper-dark-souls-bonfire-amazing-high.jpg"
          class="card-img-top"
          height="400"
        />
        <div className="card-body">
          <h5 className="card-title">Moderatorem</h5>
          <p className="card-text">
            Moderatorem es mi nick personal en cuanto a proyectos. Este proyecto
            es solo para demostración de algunas de las posibles caracteristicas
            que puedo agregar a los desarrollos. En este ejemplo se utiliza
            React con javascript (no typescript), Bootstrap, MUI React, Redux y
            React Router.
          </p>
          <Button
            variant="contained"
            onClick={() =>
              swal("Saludos!", "Has hecho click en mi alerta!", "success")
            }
          >
            Alerta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
