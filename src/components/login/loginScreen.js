
import Image from "next/image";
import Link from "next/link";

export function LoginScreen(){
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm outline-1 outline-gray-300 px-5 py-15 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label for="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">Email Address</label>
                        <div className="mt-2">
                            <input id="email" type="email" name="email" required autoComplete="email" className="block w-full bg-white dark:bg-gray-900 px-3 py-1.5 text-base text-gray-900 dark:text-white rounded-lg outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label for="password" className="block text-sm/6 font-medium text-gray-900 dark:text-white" >Password</label>
                            <div className="text-sm text-gray-900 dark:text-white">
                                <Link href="#">Forgot Password</Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input id="password" type="password" name="password" required autoComplete="current-password" className="block w-full rounded-lg bg-white dark:bg-gray-900 px-3 py-1.5 text-base text-gray-900 dark:text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />

                        </div>
                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-lg bg-indigo-600 text-white px-3 py-1.5 text-sm/6 font-semibold shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign In</button>
                    </div>

                </form>

            </div>
        </div>
    )
}