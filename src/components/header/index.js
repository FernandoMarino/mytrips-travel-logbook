import Link from "next/link";

export function Header() {
    return (
        <header className="flex px-2 py-4 bg-zinc-800 text-white">
            <div className="flex items-center w-full justify-between mx-auto max-w-7xl">
                <div className="font-bold">My Trips</div>
                <nav>
                    <ul className="flex items-center justify-center gap-2">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/trips">Trips</Link>
                        </li>
                        <li>
                            <Link href="/login">Login</Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>

        </header>
    );

}