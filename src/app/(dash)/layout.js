import NextNavbar from "@/components/shared/NextNav";
import Link from "next/link";


export default function DashboardLayout({ children }) {

  return (

    <div>
      {/* <NextNavbar></NextNavbar> */}
      {children}
    </div>


  );
};

