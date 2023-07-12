import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mobilenav } from "./Mobilenav";
import Image from "next/image";
import { Logout } from "./Logout";

const Navbar = () => {
  return (
    <header className="   bg-white sticky top-0 z-40 w-full border-b-8  border-sky-400 ">
      <div className="container   justify-between flex h-24 items-center">
        <div className="  md:hidden">
          <Mobilenav />
        </div>
        {/* <h1 className="  text-sky-500 font-medium  text-xl">Panjab university</h1> */}
        <Image
          src={
            "https://puchd.ac.in/includes/webimages/panjab-university-logo.jpg"
          }
          unoptimized
          alt="PU"
          height={200}
          width={300}
          className=" w-28   md:w-60  "
          // fill
          // style={{objectFit:'contain'}}
        />
        <Avatar>
          {/* <AvatarImage src="hdttps://github.com/shadcn.png" alt="@shadcn" /> */}
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
        
      </div>
    </header>
  );
};

export default Navbar;
