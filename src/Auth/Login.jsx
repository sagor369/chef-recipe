import React from "react";
import Header from "../Home/Home/Header";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Login = () => {

    
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value 
        const password = form.password.value
        console.log(email , password)
        
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
            <Checkbox id="remember" name="select" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
