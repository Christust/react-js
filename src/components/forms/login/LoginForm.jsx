import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import authService from "../../../services/authService";

const LoginForm = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  function login(payload) {
    console.log(payload);
    authService.login(payload);
  }
  return (
    <div className="col-6">
      <Formik
        initialValues={initialValues}
        onSubmit={(payload) => login(payload)}
      >
        <Form className="d-flex p-4 card shadow bg-body-tertiary rounded">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <Field className="form-control mb-3" name="username"></Field>
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <Field
            className="form-control mb-3"
            name="password"
            type="password"
          ></Field>
          <button type="submit" className="btn btn-primary mb-3">
            Enviar
          </button>
        </Form>
      </Formik>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
