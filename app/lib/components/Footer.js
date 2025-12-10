import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-center items-center fixed bottom-0 left-0 right-0 bg-red-400 text-white font-bold text text-center h-10 '>
        Copyright &copy; {(new Date()).getFullYear()}
    </footer>
  )
}
