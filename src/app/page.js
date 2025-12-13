import Image from "next/image";
import { LoginScreen } from "../components/login/loginScreen";
import logoMyTrips from "../../public/mytrips-logo.png"

export default function Home() {
    return (
        <main className="w-full h-screen flex">
            <div className="w-[40%] h-full p-10 flex flex-col justify-center items-center text-gray-900 dark:text-white">
                <h1 className="text-2xl font-bold">Seja Bem Vindo</h1>
                <p className="pt-5">Acesse sua conta através da tela à direita</p>
                <Image src={logoMyTrips} width={500} alt="Logo do MyTrips" />
            </div>
            <div className="w-[50%] flex flex-col justify-center">
                <LoginScreen />
            </div>
        </main>
    );
}
