import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navItems = {
  payments: {
    options: {
      "/dashboard/payments": {
        name: "past",
      },
    },
  },

  assignments: {
    options: {
      "/dashboard/assignments": {
        name: "pending",
      },
      "/completed": {
        name: "completed",
      },
    },
  },
};

export function Sidebar() {
  return (
    <ScrollArea className=" border-l-4   border-red-400   bg-white      h-screen  w-full ">
      <div className="p-4">
        {Object.entries(navItems).map(([name, { options }]) => {
          return (
            <div key={name}>
              <Collapsible>
                <CollapsibleTrigger className=" text-base   uppercase">
                  {name}
                </CollapsibleTrigger>

                {Object.entries(options).map(([path, { name }]) => (
                  <CollapsibleContent key={name}>
                    <div className=" flex my-2  items-center  text-sky-600 text-sm">
                      <ChevronRight />
                      <Link href={path}>{name}</Link>
                    </div>
                  </CollapsibleContent>
                ))}
              </Collapsible>
              <Separator className=" my-3" />
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}
