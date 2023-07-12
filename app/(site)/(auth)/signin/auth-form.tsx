"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { toast } from "@/components/ui/use-toast";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

const accountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),

  password: z
    .string()
    .min(8, {
      message: "pass must be at least 8 characters.",
    })
    .max(12, {
      message: "pass must not be longer than 12 characters.",
    }),

  //   dob: z.date({
  //     required_error: "A date of birth is required.",
  //   }),
  role: z.string({
    required_error: "Please select a role.",
  }),
  center: z.string({
    required_error: "Please select a center.",
  }),
  faculty: z.string({
    required_error: "Please select a faculty.",
  }),
});
function onSubmit(data: AccountFormValues) {
  console.log(3);
  toast({
    title: "You submitted the following values:",
    description: (
      <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      </pre>
    ),
  });
}
type AccountFormValues = z.infer<typeof accountFormSchema>;

const AccountForm = () => {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
  });

  return (
    <Tabs defaultValue="login" className="w-[400px] ">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">LOGIN</TabsTrigger>
        {/* <TabsTrigger value="admin">ADMIN</TabsTrigger> */}
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription className="  flex  gap-2 flex-col ">
              <Form {...form}>
                <form
                  className="  flex  gap-2 flex-col"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  {/* <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormDescription>
                This is the name that will be displayed on your profile and in
                emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}

                  <Select>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Roles</SelectLabel>
                        <SelectItem value="student">Student</SelectItem>
                        <SelectItem value="examiner">Examiner</SelectItem>
                        <SelectItem value="more">
                          More Roles will be added ...
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Select a Faculty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Faculty</SelectLabel>
                        <SelectItem value="arts">Arts</SelectItem>
                        <SelectItem value="eng">
                          Engineering and Technology
                        </SelectItem>
                        <SelectItem value="more">
                          More Faculities will be added ...
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[150px]">
                      <SelectValue placeholder="Select a center" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Faculty</SelectLabel>
                        <SelectItem value="uiet">UIET</SelectItem>
                        <SelectItem value="more">
                          More Faculities will be added ...
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </form>
              </Form>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Admin" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">password</Label>
              <Input id="password" type="password" defaultValue="1234" />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Sign In</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      {/* <TabsContent value="admin">
            <Card>
              <CardHeader>
                <CardTitle>User</CardTitle>
                <CardDescription>
                  Make sure before proceeding because you're accessing sensitive
                  info.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="user" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">password</Label>
                  <Input id="password" type="password" defaultValue="1234" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Sign In</Button>
              </CardFooter>
            </Card>
          </TabsContent> */}
    </Tabs>
  );
};

export default AccountForm;
