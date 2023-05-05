import React from "react";
import Header from "../Home/Home/Header";
import FooterNav from "../Home/Footer";

const Blog = () => {
  return (
    <div>
      <Header></Header>
      <div className="w-3/4 p-4 border rounded mx-auto">
        <h2 className="text-2xl border-b pb-4 mb-4">
          Controll component & unontrolled Components Details{" "}
        </h2>
        <p className="text-orange-300 text-xl">Controlled Components:</p>
        <p className="my-4 ">
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

        <p className="text-orange-300 text-xl">Uncontrolled Components:</p>

        <p className="my-4 ">
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
      <div className="w-3/4 p-4 border rounded mt-6 mx-auto">
        <h1 className="text-2xl border-b pb-4 mb-4">
          Custom hook & Crate hook Details{" "}
        </h1>
        <div>
          <p className="text-orange-300 text-xl">Custom hook</p>
          <p className="my-4 ">
            Custom hook is a JavaScript function that starts with the prefix
            use. Custom hooks allow you to reuse stateful logic across different
            components, without duplicating code. Custom hooks are not a feature
            of React itself, but a convention used by developers to create
            reusable logic. we are defining a custom hook called useCounter,
            which takes two parameters: initialCount and step. The hook uses the
            useState and useEffect hooks from React to manage a counter that
            increments every second. The useCounter hook returns the current
            count, which can be used in any component that uses the hook
          </p>
        </div>
        <div>
          <p className="text-orange-300 text-xl">Create hook</p>
          <p className="my-4 ">
            Creating custom hooks can help to reduce code duplication and make
            your code more modular and reusable. Note: Custom hooks are just a
            convention, not a requirement. You can create regular JavaScript
            functions that return values or perform side effects, but they won't
            have the same benefits as custom hooks.
          </p>
        </div>
      </div>
      <div className="w-3/4 p-4 border rounded mt-6 mx-auto">
        <h1 className="text-2xl border-b pb-4 mb-4">
          Express js & Node js  Details
        </h1>
        <div>
          <p className="text-orange-300 text-xl">Express Js</p>
          <p className="my-4 ">
            Express.js is a web framework for Node.js that provides a set of
            features and tools for building web applications and APIs. It is
            built on top of Node.js and provides a simple, yet powerful API for
            creating HTTP servers, handling requests and responses, and working
            with data. The main difference between Node.js and Express.js is
            that Node.js is a runtime environment for executing JavaScript code
            on the server, while Express.js is a web framework that provides a
            set of tools and features for building web applications and APIs
            using Node.js.
          </p>
        </div>
        <div>
          <p className="text-orange-300 text-xl">Node Js</p>
          <p className="my-4 ">
            Node.js provides the core functionality for building server-side
            applications, including file system operations, network
            communication, and other low-level features. Express.js builds on
            top of Node.js by providing a more convenient and powerful API for
            working with HTTP requests and responses, handling routing, and
            providing middleware for common tasks such as parsing JSON, handling
            cookies, and logging. In summary, Node.js provides the foundation
            for building server-side applications using JavaScript, while
            Express.js provides a web framework that simplifies the development
            of web applications and APIs using Node.js.
          </p>
        </div>
      </div>
      <FooterNav></FooterNav>
    </div>
  );
};

export default Blog;
