import React, { useContext, useState } from "react";
import Header from "../Home/Home/Header";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { AuthContext } from "../PrivetRout/PriveteRoute";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa'


const Login = () => {
    const { handleSignIn, githubSign, googleSign } = useContext(AuthContext)
    const navigate = useNavigate()
    const [accepted, setAccepted] = useState(false)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    console.log(from)

    
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value 
        const password = form.password.value

        handleSignIn(email, password)
        .then(result =>{
            const user = result.user
            navigate(from, { replace: true })
        })
        .catch(error =>{
            const errorMessage = error.message 
            const errorCord = error.cord
        })
        
        }

        
    const handleAccepted = event =>{
        setAccepted(event.target.checked)
        
    }


  return (
    <div className="bg-gray-500 pb-10">
      <Header></Header>
      <div className="bg-white w-2/5 mx-auto p-4 my-20 rounded ">
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
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
            <TextInput id="password1" name="password" type="password" required={true} />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox onClick={handleAccepted} id="remember" name="select" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
            <p><small>create an new account  <Link className="text-blue-500" to='/register'> Sign up</Link> </small></p>
            
          <Button disabled={!accepted}  type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
