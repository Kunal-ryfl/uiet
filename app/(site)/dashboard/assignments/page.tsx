import React from "react";
import TableComponent from "../../components/TableComponent";
import { Assignment } from "@/utils/types";

const head: string[] = ["id", "option", "examiner", "course", "status"];

const data: Assignment[] = [
  {
    id: 1,
    examiner: "Prakhar ",
    course: "DSA",
    status: true,
    option: "regular",
  },
  { id: 2, examiner: "Ritesh ", course: "CN", status: true, option: "regular" },
  {
    id: 3,
    examiner: "Prakhar ",
    course: "OS",
    status: true,
    option: "regular",
  },
];

const page = () => {
  return (
    <div className="">
      <TableComponent head={head} data={data} />
    </div>
  );
};

export default page;
