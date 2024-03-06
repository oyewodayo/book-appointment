import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    const Menu = [
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:2,
            name:'Explore',
            path:'/explore'
        },
        {
            id:3,
            name:'Contact us',
            path:'/'
        }
    ]
  return (
    <div className='flex item-center justify-between p-4 shadow-sm'>
        <div className='flex items-center gap-10'>
            <Image src="/logo.svg" width={100} height={80} alt='Logo' />

            <ul className='md:flex gap-8 hidden'>
                {Menu.map((item, index)=>(
                    <Link href={item.path}>
                    <li className='cursor-pointer hover:text-primary hover:scale-105 transition-all ease-in-out'>{item.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
        <Button>Get started</Button>
    </div>
  )
}

export default Header