import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mobilenav } from "./Mobilenav";
import Image from "next/image";
import { Logout } from "./Logout";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
const Navbar = () => {
  return (
    <header className="   bg-white sticky top-0 z-40 w-full border-b-8  border-sky-400 ">
      <div className="container   justify-between flex h-24 items-center">
        <div className="  md:hidden">
          <Mobilenav />
        </div>
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

        <DropdownMenu >
          <DropdownMenuTrigger  asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar>
              {/* <AvatarImage src="hdttps://github.com/shadcn.png" alt="@shadcn" /> */}
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent forceMount>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>option1</DropdownMenuItem>
            <DropdownMenuItem>option2</DropdownMenuItem>
            <DropdownMenuItem>option3</DropdownMenuItem>
            <DropdownMenuItem><Logout/></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Navbar;
