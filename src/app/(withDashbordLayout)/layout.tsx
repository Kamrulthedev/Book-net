import Footer from "@/components/shared/Footer";
import Sidebar from "@/components/ui/Sidebar";
import React from "react";

const DashbordLayoutPage = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Sidebar>{children}</Sidebar>
      <Footer></Footer>
    </>
  );
};

export default DashbordLayoutPage;
