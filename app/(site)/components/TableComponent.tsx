import React from "react";
import { Assignment } from "@/utils/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
const TableComponent = ({
  head,
  data,
}: {
  head: string[];
  data: Assignment[];
}) => {
  if (data.length === 0)
    return (
      <div className=" h-40 flex flex-col justify-center items-center">
        <p className=" text-sm ">No pending Assignments</p>
      </div>
    );
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent sssignments.</TableCaption>
        <TableHeader>
          <TableRow>
            {head.map((x, index) => (
              <TableHead
                className={clsx(" uppercase ", {
                  " w-[100px]  ": index === 0,
                })}
              >
                {x}
              </TableHead>
            ))}

            <TableHead></TableHead>

            {/* 
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((Assignment: Assignment, index) => (
            <TableRow key={index}>
              <TableCell>{Assignment.id}</TableCell>
              <TableCell>{Assignment.option}</TableCell>
              <TableCell>{Assignment.examiner}</TableCell>
              <TableCell>{Assignment.course}</TableCell>
              <TableCell>{Assignment.status ? "pending" : "done"}</TableCell>
              <TableCell>
                {Assignment.status ? (
                  <Button variant="outline" size="icon" asChild>
                    <Link href={`/dashboard/assignments/${Assignment.id}`}>
                      <ArrowUpRightIcon />
                    </Link>
                  </Button>
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
          ))}

          {/* <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell> */}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;
