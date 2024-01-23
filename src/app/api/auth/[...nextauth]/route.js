
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import GoogleProvider from "next-auth/providers/google";

import NextAuth from "next-auth/next";
import clientPromise from "../../../../../lib/mongoAdapter";


const isAdmin  = ['manushresth.official24669@gmail.com','shresthm727@gmail.com'];

export const AuthOptions = {
    providers : [
        GoogleProvider({
            clientId : process.env.GOOGLE_CLIENT_ID,
            clientSecret : process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    adapter : MongoDBAdapter(clientPromise),
    callbacks : {
        session : (session,token,user) => { //this will be called whenever the useSession() is called in client components, getServerSession() is called in server components and whenever any kind of request is made to /api/auth/session or /api/auth/signin
            if(isAdmin.includes(session?.user?.email)){ //this means user is logged in and the email matches the isAdmin email
                console.log('the user email is  : ',session.user?.email);
                session.user.role = 'admin';
                console.log('the user role is : ',session.user?.role);
                return session;
            }else{
                console.log('USER IS NOT ADMIN');
                if(!session.user){
                    return null; // user is not logged in , the session.user object contains nothing 
                }
                session.user.role = 'Global-User' //user is logged in but the email is not matching the isAdmin email , therefore the user role will be global-user only
                console.log('the user role is : ',session.user?.role);
                return session;
            }
        },

        // signIn : (user,account,profile,email,credentials) => {
        //     //this will be called whenever any singIn request is made to api/auth/signIn , or any singIn method from next/auth is called , this is mainly done to handle whether a particular user is allowed to singIn or not 
        // },
        // redirect : (url,baseUrl) => {
        //     // this will be called after login process is completed , suppose the signIn was a success , then redirect back to /homepage of the website otherwise in case of unsuccessfull login attempt one can redirect to /auth/signin?error=login_failed 
        //     // baseUrl will be the base url of our application , the root url where the next.js application might be hosted for example http://localhost:3000
        //     // whereas the url might be the relative path of our website where one has to be redirected , example /profile after successful login attempt
        //     // the url might also be non-relative , it might contain the url to website of different domain/origins where one has to be redirected


        // },
        // jwt : (token , account , profile) => {
        //     // this will be called whenever a jwt token is created or updated Requests to /api/auth/signin, /api/auth/session and calls to getSession(), getServerSession(), useSession() will invoke this function, but only if you are using a JWT session.
        // }

       

    }
    
}

const handler = NextAuth(AuthOptions);
export { handler as GET, handler as POST };
