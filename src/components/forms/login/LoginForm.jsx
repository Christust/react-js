import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import authService from "../../../services/authService";

const LoginForm = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const loginSchema = Yup.object().shape({
    username: Yup.string().required("El campo username es requerido"),
    password: Yup.string().required("El campo password es requerido"),
  });
  function login(payload) {
    console.log(payload);
    authService.login(payload);
  }
  return (
    <div className="col-6">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(payload) => login(payload)}
      >
        {(props) => {
          const { touched, errors, isValid } = props;
          return (
            <Form className="d-flex p-4 card shadow bg-body-tertiary rounded">
              <label className="form-label" htmlFor="username">
                Username
              </label>
              <Field className="form-control mb-3" name="username"></Field>
              {errors.username && touched.username && (
                <div className="text-danger fw-light">
                  El nombre de usuario es requerido.
                </div>
              )}
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <Field
                className="form-control mb-3"
                name="password"
                type="password"
              ></Field>
              {errors.password && touched.password && (
                <div className="text-danger fw-light">
                  <p>La contraseña es requerida.</p>
                </div>
              )}
              <button
                disabled={!isValid}
                type="submit"
                className="btn btn-primary mb-3"
              >
                Enviar
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
