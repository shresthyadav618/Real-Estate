import PropertiesProvider from '@/propertiesProvider/propertiesProvider';
import { Inter } from 'next/font/google';
import AgentProvider from '../../components/agentProvider/AgentProvider';
import AuthProvider from '../../components/authProvider/authProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prime Associates Group',
  description: 'Prime Associates Group , a real estate agency which helps you to choose your Dream Home. Your Dream is one step away , visit US.',
  metadataBase : new URL('https://primeassociatesgroup.com')
}

export default function RootLayout({ children }) {

 

  return (
    <html lang="en">
      {/* <AuthProvider> */}
      <head>
      {/* <link rel="icon" href="http://localhost:3001/_next/static/media/final_logo.9574816d.png" type="image/png" /> */}
      <link href='https://fonts.googleapis.com/css?family=Alegreya Sans SC' rel='stylesheet'></link>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
<script src="https://cdn.tailwindcss.com"></script>
      <script src="https://kit.fontawesome.com/cacef5af72.js" crossorigin="anonymous"></script>
      </head>
      
      <body className={inter.className}>

        <AuthProvider>
          <AgentProvider>
          <PropertiesProvider>
          {children}
          </PropertiesProvider>
          </AgentProvider>
          </AuthProvider>
        
        </body>
     
      {/* </AuthProvider> */}
    </html>
  )
}
