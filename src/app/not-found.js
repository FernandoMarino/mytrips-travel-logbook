import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col w-full h-screen text-white justify-center items-center outline-2 outline-white px-15">
            <h1 cla>Página não encontrada!</h1>
            <p>A página que tentou acessar não existe</p>
            <Link href="/">Voltar para Home</Link>
        </div>
    )
}