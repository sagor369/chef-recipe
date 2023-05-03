import React, { useContext, useState } from "react";
import Header from "../Home/Home/Header";
import { AuthContext } from "../PrivetRout/PriveteRoute";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const { handleSignUp , githubSign , googleSign } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false)
  const [success, setSuccess] = useState('')

  const notify = () => toast.success('Registation successfull', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });


  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    handleSignUp(email, password)
    
      .then((result) => {
        const user = result.user;
        notify()
      })
      .catch((error) => {
        const errorMessage = error.message;
        const errorCord = error.code;
      });
      form.reset()

  };

  const handleAccepted = event =>{
    setAccepted(event.target.checked)
    
}

const googleUser = () =>{
    googleSign()
    .then(result =>{
        const user = result.user
        notify()
        setSuccess('Registation successful ')
    })
    .catch(error =>{
        const errorMessage = error.message
        const errorCord = error.code
    })
}
const githubUser = () =>{
    githubSign()
    .then(result =>{
        const user = result.user
        notify()
        setSuccess('Registation successful ')
    })
    .catch(error =>{
        const errorMessage = error.message
        const errorCord = error.code
    })
}


  return (
    <div className="bg-gray-500 pb-10">
      <Header></Header>
      <p className="text-yellow-400 text-xl text-center m-10">{success}</p>
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
              id="password1"
              name="photo"
              type="file"
              
            />
          </div>
          
          
          <div className="flex items-center gap-2 ">
            <Checkbox onClick={ handleAccepted } id="remember" name="select" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <p><small>Already have an account <Link className="text-blue-500" to='/login'> Login</Link> </small></p>
          <Button  disabled = {!accepted} type="submit">Submit</Button>
        </form>
        <div className="flex justify-between px-4  my-4">
        <button onClick={googleUser} className="flex items-center bg-yellow-200 bg-opacity-60 gap-2 border justify-center p-2 mb-2 rounded ">
                <FaGoogle className="w-6 h-6"/>
                <p>Google Sign In </p>
          </button>
          <button onClick={githubUser} className="flex items-center rounded justify-center p-2 gap-2 border ">
                <FaGithub className="w-6 h-6"/>
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
