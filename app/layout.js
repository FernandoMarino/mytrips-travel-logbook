import Link from "next/link";
import "./globals.css";
import Header from "./lib/components/Header";
import Footer from "./lib/components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="flex flex-col">
        <Header />
          <div className="font-bold mx-auto text-4xl">
            {children}
          </div>
        <Footer className="flex mt-auto" />
      </body>
    </html>
  );
}
