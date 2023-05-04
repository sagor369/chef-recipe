import React, { useContext, useState } from "react";
import Header from "../Home/Home/Header";
import { AuthContext } from "../PrivetRout/PriveteRoute";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./Error";


const Register = () => {
  const { handleSignUp, githubSign, googleSign, } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState('')


  // success toast function 

  const sucToast = (name) =>
    toast.success(name, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });



    // error toast function 

  const notify = (err) =>
    toast.error(err, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });


    // email & password reagistation section

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value
    const photo = form.photo.value
    console.log(name, photo)

    if (password.length < 8) {
      // setError("Password must not contain Whitespaces.");
      notify("Password must not contain Whitespaces.");
      return;
    } else if (!/^(?=.*[A-Z]).*$/.test(password)) {
      // setError("Password must have at least one Uppercase Character.");
      notify("Password must have at least one Uppercase Character.");
      return;
    } else if (!/^(?=.*[0-9]).*$/.test(password)) {
      // setError("Password must contain at least one Digit.");
      notify("Password must contain at least one Digit.");
      return;
    } else if (
      !/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/.test(password)
    ) {
      // setError("Password must contain at least one Special Symbol.");
      notify("Password must contain at least one Special Symbol.");
      return;
    } else {
      handleSignUp(email, password)
        .then((result) => {
          const user = result.user;
          // setSuccess("Registation successfull");
          sucToast("Registation successfull");
        })
        .catch((error) => {
          const errorMessage = error.message;
          const errorCord = error.code;
          setError(errorCord)
          setMessage(errorMessage)
        });


      form.reset();

        

    }
  };




  // button disable function

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };



  // google signup section

  const googleUser = () => {
    googleSign()
      .then((result) => {
        const user = result.user;
        notify();
        setSuccess("Registation successful ");
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCord = error.code;
        setError(errorCord)
          setMessage(errorMessage)
      });
  };



  // github signup section

  const githubUser = () => {
    githubSign()
      .then((result) => {
        const user = result.user;
        notify();
        setSuccess("Registation successful ");
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCord = error.code;
        setError(errorCord)
          setMessage(errorMessage)
      });
  };

  return (
    <div className="bg-gray-500 pb-10">
      <Header></Header>

        {
          message && <Error message= {message} error = {error}></Error>
        }    

      <div className="bg-white w-2/5 mx-auto p-4 my-20 rounded ">
        <form className="flex flex-col gap-4" onSubmit={handleRegister}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your name" />
            </div>
            <TextInput
              id="name"
              name="name"
              type="text"
              placeholder="your name"
              required={true}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              name="email"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              name="password"
              type="password"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photo" value="Your Photo url" />
            </div>
            <input
              className="border-none"
              id="photo"
              name="photo"
              type="file"
            />
          </div>

          <div className="flex items-center gap-2 ">
            <Checkbox onClick={handleAccepted} id="remember" name="select" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <p>
            <small>
              Already have an account{" "}
              <Link className="text-blue-500" to="/login">
                {" "}
                Login
              </Link>{" "}
            </small>
          </p>
          <Button disabled={!accepted} type="submit">
            Submit
          </Button>
        </form>
        <div className="flex justify-between px-4  my-4">
          <button
            onClick={googleUser}
            className="flex items-center bg-yellow-200 bg-opacity-60 gap-2 border justify-center p-2 mb-2 rounded "
          >
            <FaGoogle className="w-6 h-6" />
            <p>Google Sign In </p>
          </button>
          <button
            onClick={githubUser}
            className="flex items-center rounded justify-center p-2 gap-2 border "
          >
            <FaGithub className="w-6 h-6" />
            <p>Github Sign In </p>
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Register;
