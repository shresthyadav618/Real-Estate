import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");
export const dynamic = 'force-dynamic';
export async function POST(NextRequest){
    try {
            // Create .createTestAccount

            const reqBody  = await NextRequest.json();
            console.log('the body inside the email endpoint is : ',reqBody);
            const {email,firstName,lastName,number,message} = reqBody;

            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                type: 'OAuth2',
                user: process.env.NODEMAILER_MAIL,
                pass: process.env.NODEMAILER_PASS,
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken: process.env.GOOGLE_REFRESH_TOKEN
              }
            });
      
            // Define email options
            const mailOptions = {
              from: email,
              to: 'manushresth.official24669@gmail.com',
              subject: `${firstName} wants to send you a message`,
              text: `Name: ${firstName+' '+lastName}\nEmail: ${email}\nMessage: ${message} and phone number is : ${number}`
            };
      
            // Send email
            await transporter.sendMail(mailOptions);
            return NextResponse.json({
                status : 200,
                message : 'Email sent successfully'
            })
          } catch (error) {
            console.error('Error occurred:', error);
            return NextResponse.json({
                status : 404,
                error : error
            })
          }
}