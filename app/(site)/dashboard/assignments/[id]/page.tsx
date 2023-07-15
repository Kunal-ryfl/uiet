import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <div>
      <div className="  px-2 py-4 text-center">
        <h1>CENTER NAME,PANJAB UNIVERSITY,CHANDIGARH</h1>
        <p>DSA | Subject code : 123</p>
        <p>Regular | Examination | july - dec 2023 </p>
        <div className=" flex justify-between">
          <p>Time allowed : 3 hours</p>
          <p>Max. marks : 50 </p>
        </div>
      </div>
      <div className=" p-2 ">
        <p>
          Number of questions to set :<span className="  font-bold"> 7 </span>
        </p>

        <div className=" py-4 ">
          <div className=" grid w-full gap-4">
            <Textarea className=" h-80"   placeholder="Type your questions here." />
            <Button>Proceed</Button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
