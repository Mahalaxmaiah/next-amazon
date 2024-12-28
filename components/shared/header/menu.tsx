
import React from 'react'
import Link from 'next/link'
import { UserIcon, ShoppingCartIcon } from 'lucide-react'

const Menu = () => {
  return (
    <div className='flex justify-end'>
        <nav className='flex gap-3 w-full'>
            <Link href='/signin' className='header-button'>
            <UserIcon className='w-8 h-8' />
            <span className='font-bold'>Sign In</span>
            </Link>

            <Link href='/cart' className='header-button'>
            <ShoppingCartIcon className='w-8 h-8' />
            <span className='font-bold'>Cart</span>
            </Link>
        </nav>
    </div>
  )
}

export default Menu