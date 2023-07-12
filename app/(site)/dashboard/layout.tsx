import ActiveLink from "../components/ActiveLink";
import Navbar from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata = {
  title: "panjab university | Dashboard ",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="  bg-neutral-200 ">
        <Navbar />
        <div className="   bg-sky-50    container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10  ">
          <div className="    bg-yellow-300 pl-2  shadow-xl border  fixed top-24 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block  ">
            <Sidebar />
          </div>
          <div className="    relative py-6 lg:gap-10 lg:py-8 xl:grid ">
            <div className="bg-white  border  p-2    mx-auto w-full min-w-0">
              <ActiveLink />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
