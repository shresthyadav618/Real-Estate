// import { getServerSession } from "next-auth";
"use client";
// import { AuthOptions } from "../api/auth/[...auth]/route";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "../../../components/styles/dashboard.css";
export default function account() {
  // const session = getServerSession(AuthOptions);
  const { data: session } = useSession();
  console.log("THE SESSION IS : ", session);
  // console.log('the session is : ',session);
  console.log("THE EMAIL COULD BE ", session?.user?.email);
  const Router = useRouter();
  if (!session) {
    console.log(session);
    // signIn();
    return <div className="w-[100vw] h-[100vh] flex items-center justify-center"><button className="btn__property" onClick={signIn}>Login</button></div>;
  }
  console.log("the user role is : ", session?.user?.role);

  async function handleLogout() {
    // not logged in , first logIn
    await signOut();
    Router.push("/");
  }

  if (session) {
    if (session?.user?.role == "admin") {
        // the user is an admin 
        Router.push('/Dashboard');
    //   return (
    //     <div className="account__container">
    //       <Header />
    //       {session.user?.role}

          
    //       <h1>Welcome to the dashboard</h1>    
    //       <button onClick={handleLogout}>Logout</button> 
    //     </div>
    //   );
    }else{
        Router.push('Profile');
        return <div>Welcome Global User</div> // user is logged in but he is not an admin , but a global user
    }
  }


}
