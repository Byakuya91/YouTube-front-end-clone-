import React, { useState } from "react";

// define function to take in form components to
const useForm = (callback) => {
  //  state variables for the form
  const [formValues, setFormValues] = useState({});

  // updating the array of formValues with the new fields passed inside.
  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.value]: event.target.value });
  };

  // handling the submit of the form

  const handleSubmit = (event) => {
    // Prevents the page from reloading when submit is clicked.
    event.preventDefault();

    // callback function invoked for a form component.
    callback();

    //  resetting values in form fields
    setFormValues({});
    event.target.reset;
  };
  // return the values needed for the function

  return { formValues, handleChange, handleSubmit };
};

export default useForm;
