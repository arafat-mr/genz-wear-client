// "use client";

// import React from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { getSession } from "next-auth/react";


// export default function DashBoardLayout({ children }) {

//   const router=useRouter()
  
//   const session=getSession()
//   console.log(session);
  
  
//   return (
//     <div className="flex min-h-screen bg-gray-100 relative z-5">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md p-5">
//         <h2 className="text-xl font-bold mb-5">Dashboard</h2>
//         <nav className="flex flex-col gap-3">
//           <Link href="/DashBoard/AddProduct" className="hover:text-yellow-500">
//             Add Product
//           </Link>
        
//         </nav>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 p-6">
//         {children} {/* This renders page.jsx or subpage content */}
//       </main>
//     </div>
//   );
// }


"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { toast } from "react-toastify";
import LoadingSpinner from "../LoadingSpinner";

export default function DashBoardLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Protect the dashboard
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/Login");
    } else if (status === "authenticated") {
      setLoading(false);
    }
  }, [status, router]);

  if (loading) return <LoadingSpinner/>

  return (
    <div className="flex min-h-screen bg-gray-100 relative z-5">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-5">Dashboard</h2>
          <nav className="flex flex-col gap-3">
            <Link href="/DashBoard/AddProduct" className="hover:text-yellow-500">
              Add Product
            </Link>
            {/* Add more links here */}
          </nav>
        </div>

      
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
