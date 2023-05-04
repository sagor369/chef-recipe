import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl ">Controll component & unontrolled Components Details </h2>
        <p>Controlled Components:</p>
        <p>
          A login form where the username and password input fields are
          controlled by the state of the component. A search bar where the
          search query input field is controlled by the state of the component.
          A form where the user can update their personal information, and each
          input field is controlled by the state of the component. A form where
          the user can create a new task, and the task name, description, and
          due date input fields are controlled by the state of the component. A
          form where the user can upload a file, and the file input field is
          controlled by the state of the component. A form where the user can
          select an option from a dropdown menu, and the selected option is
          controlled by the state of the component.
        </p>

        <p>Uncontrolled Components:</p>

        <p>
          Uncontrolled Components: A form where the user can enter their email
          address, and the input field is uncontrolled, with the form data being
          handled by the DOM. A form where the user can enter their phone
          number, and the input field is uncontrolled, with the form data being
          handled by the DOM. A form where the user can enter their address, and
          the input fields for street, city, state, and zip code are
          uncontrolled, with the form data being handled by the DOM. A form
          where the user can enter a date, and the input field is uncontrolled,
          with the form data being handled by the DOM. A form where the user can
          enter a time, and the input field is uncontrolled, with the form data
          being handled by the DOM. A form where the user can enter a comment,
          and the input field is uncontrolled, with the form data being handled
          by the DOM.
        </p>
      </div>
    </div>
  );
};

export default Blog;
