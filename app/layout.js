import Link from "next/link";
import "./globals.css";
import Header from "./lib/components/Header";
import Footer from "./lib/components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
          
            {children}
          
        <Footer className="flex mt-auto" />
      </body>
    </html>
  );
}
