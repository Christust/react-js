import React, { useState } from "react";
import Chart from "react-apexcharts";
import Paper from "@mui/material/Paper";

const HomePage = () => {
  const state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
    },
    series: [
      {
        name: "Primeros valores",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Segundos valores",
        data: [70, 10, 25, 90, 59, 30, 50, 120],
      },
    ],
  };
  const stateDonut = {
    options: {
      labels: ["Vue", "React", "Angular", "Rails", "Django"],
    },

    series: [20, 20, 20, 20, 20],
  };
  const [contador, setContador] = useState(0);

  function addOne() {
    setContador(contador + 1);
  }

  return (
    <div className="row justify-content-center">
      <h1>Demos</h1>
      <hr />
      <h2>Cards</h2>
      <div>
        <div className="card shadow-lg mb-5">
          <img
            src="https://e0.pxfuel.com/wallpapers/672/618/desktop-wallpaper-dark-souls-bonfire-amazing-high.jpg"
            class="card-img-top"
            height="400"
          />
          <div className="card-body">
            <h5 className="card-title">Moderatorem</h5>
            <p className="card-text">
              Moderatorem es mi nick personal en cuanto a proyectos. Este
              proyecto es solo para demostración de algunas de las posibles
              caracteristicas que puedo agregar a los desarrollos. En este
              ejemplo se utiliza React con javascript (no typescript),
              Bootstrap, MUI React, Redux y React Router.
            </p>
          </div>
        </div>
      </div>
      <h2>Graficas</h2>
      <div className="row justify-content-between">
        <div className="card col-12 shadow-lg mb-5">
          <div className="card-body">
            <div className="mixed-chart">
              <Chart options={state.options} series={state.series} type="bar" />
            </div>
          </div>
        </div>
        <div className="card col-6 shadow-lg mb-5">
          <div className="card-body">
            <div className="mixed-chart">
              <Chart
                options={state.options}
                series={state.series}
                type="line"
              />
            </div>
          </div>
        </div>
        <div className="card col-6 shadow-lg mb-5">
          <div className="card-body">
            <div className="mixed-chart">
              <Chart
                options={stateDonut.options}
                series={stateDonut.series}
                type="donut"
              />
            </div>
          </div>
        </div>
      </div>
      <h2>Formularios</h2>
      <div className="d-flex justify-content-center">
        <Paper elevation={12} className="col-8 mb-5 p-3">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </Paper>
      </div>
      <div className="d-flex justify-content-center">
        <Paper elevation={12}>
          {contador} <button onClick={() => addOne()}>Add 1</button>
        </Paper>
      </div>
    </div>
  );
};

export default HomePage;
