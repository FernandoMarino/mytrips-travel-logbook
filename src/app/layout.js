import Link from "next/link";
import "./globals.css";
import { Header } from "../components/header";
import {Inter} from "next/font/google"

export const metadata = {
  title: 'MyTrips - Travel Logbook',
  description: 'Website desenvolvido em Next.js para a Disciplina de Frontend Jamstack com Next.js'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="h-full bg-white dark:bg-gray-900">
      <body className="h-full">

            {children}
          
        
      </body>
    </html>
  );
}
