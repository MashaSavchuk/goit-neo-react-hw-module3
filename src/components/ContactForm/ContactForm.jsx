import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const formValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("This field is required"),
    number: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "Mobile number must be in the format 123-45-67"
      )
      .required("This field is required"),
  });
  const handleSubmit = (data, { resetForm }) => {
    addContact({
      id: nanoid(),
      name: data.name,
      number: data.number,
    });
    resetForm();
  };

  //   const handleSubmit = (values, actions) => {
  //     toSubmit(values);
  //     actions.resetForm();
  //   };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={formValidationSchema}
    >
      <Form className={css.form}>
        <div className={css.formElement}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="p" />
        </div>
        <div className={css.formElement}>
          <label htmlFor="number">Number</label>
          <Field type="phone" name="number" id="number" />
          <ErrorMessage name="number" component="p" />
        </div>
        <button className={css.addButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
