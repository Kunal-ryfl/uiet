import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ExpandedOptions } from "./ExpandedOptions";
import { Logout } from "./Logout";

// const tags = Array.from({ length: 50 }).map(
//   (_, i, a) => `v1.2.0-beta.${a.length - i}`
// )
const tags = ["payments", "assignments"];

export function Sidebar() {
  return (
    <ScrollArea className=" border-l-4   border-red-400   bg-white      h-screen  w-full ">
      <div className="p-4">
        {tags.map((tag) => (
          <React.Fragment>
            <Link href={`/dashboard/${tag}`}>
              <div className=" uppercase py-3 text-sm  cursor-pointer" key={tag}>
                {tag}
              </div>
            </Link>
            <Separator className="my-2" />
            {/* <ExpandedOptions /> */}
          </React.Fragment>
        ))}
      </div>
      
    </ScrollArea>
  );
}
