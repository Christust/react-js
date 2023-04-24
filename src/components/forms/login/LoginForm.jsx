import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";

const LoginForm = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <label htmlFor="username">Username</label>
        <Field name="username"></Field>
        <label htmlFor="password">Password</label>
        <Field name="password" type="password"></Field>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
