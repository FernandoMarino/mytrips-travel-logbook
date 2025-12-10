import Link from "next/link";
import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="my-0 mx-auto max-w-6xl text-center">
        <Link href="/">Home</Link>&nbsp;|&nbsp;
        <Link href="/trips">Trips</Link>&nbsp;|&nbsp;
        <Link href="/login">Login</Link>
        <button className="bg-sky-600 hover:bg-sky-700 px-5 py-3 text-white rounded-lg ml-2 my-2 w-30 font-bold">Login</button>
        <button className="bg-sky-600 hover:bg-sky-700 px-5 py-3 text-white rounded-lg ml-2 my-2 w-30 font-bold">Sign Up</button>
        <hr />
        {children}
        <hr />
        Copyright &copy; {(new Date()).getFullYear()}
      </body>
    </html>
  );
}
