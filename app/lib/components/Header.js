
import Link from 'next/link'
import React from 'react'

const links = [
    {name: 'Home', href: "/"},
    {name: 'Trips', href: "/trips"},
    {name: 'Login', href: "/login"},
    {name: 'Sign Up', href: "/sign-up"},
]

export default function Header() {
  return (
    <header className='flex bg-red-400 justify-center shadow h-20 items-center'>
        
        <nav className='flex gap-4'>
            {
                links.map(
                    link => (
                        <Link key={link.name} href={link.href} className='flex bg-white rounded-lg w-40 justify-center items-center text-red-400 h-10  font-bold'>
                            {link.name}
                        </Link>
                    )
                )
            }
        </nav>
    </header>
  )
}
