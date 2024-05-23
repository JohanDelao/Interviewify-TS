"use client"
import React from 'react';
import Logo from '../../components/logo';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { HomeOutlined, HistoryOutlined } from '@ant-design/icons';

const SideNav = () => {
    const pathName = usePathname();

    return (
    <div className='w-56 h-full'>
            <div className='w-full h-full bg-white border-r-2 border-black/10 flex flex-col p-4 gap-10'>
                <Logo />
                <div className='flex flex-col gap-3'>
                    <p className='text-xs font-redHatText'>DASHBOARD</p>
                    <Link className={clsx('w-full h-9 text-lg rounded', pathName.startsWith('/dashboard') ? "bg-secondary/10 text-secondary" : "bg-transparent text-accent hover:bg-secondary/10 hover:text-secondary transition-colors")} href={'/dashboard'}>
                        <div className='flex gap-3 w-11/12 h-full mx-auto items-center'>
                            <HomeOutlined />
                            <p className='font-urbanist font-medium text-base'>Home</p>
                        </div>
                    </Link>
                    <Link className={clsx('w-full h-9 text-lg rounded', pathName.startsWith('/history') ? "bg-secondary/10 text-secondary" : "bg-transparent text-accent hover:bg-secondary/10 hover:text-secondary transition-colors")} href={'/history'}>
                        <div className='flex gap-3 w-11/12 h-full mx-auto items-center'>
                            <HistoryOutlined />
                            <p className='font-urbanist font-medium text-base'>History</p>
                        </div>
                    </Link>
                </div>
            </div>
      </div>
    )
}

export default SideNav;