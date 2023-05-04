import { Footer } from "flowbite-react";
import React from "react";
import logo from "../assets/logo.png";


const FooterNav = () => {
  return (
    
      <Footer container={true} className="bg-gray-500 ">
        <div className="w-full text-center h-60">
          <div className="w-full justify-between px-4 sm:flex sm:items-center sm:justify-between">
             
          <Footer.Brand
        href="https://flowbite.com"
        src={logo}
        alt="Flowbite Logo"
        name="Food_village"
      />
           
            
            <Footer.LinkGroup >
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Food Village™" year={2023} />
        </div>
      </Footer>
    
  );
};

export default FooterNav;
