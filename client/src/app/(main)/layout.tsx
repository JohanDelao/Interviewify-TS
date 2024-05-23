"use client"
import React, { useEffect, useState } from 'react';
import SideNav from './components/sidenav'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { LoadingOutlined } from '@ant-design/icons';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          'http://localhost:4000/auth/login/success',
          {
            withCredentials: true,
          },
        );
        if(res.data.user) {
          setIsLoading(false);
        } else {
          router.push('/')
        }
      } catch (error) {
        console.log(error);
        router.push('/')
      }
    };
    getUser();
  }, []);

  if(isLoading){
    return <div className='w-full h-screen flex justify-center items-center'><LoadingOutlined className='text-xl text-blue-300' /></div>
  }

  return (
    <div className='w-full h-screen bg-primary flex'>
      <SideNav />
      <div className='w-[calc(100vw-14rem)] h-full'>
        {children}
      </div>
    </div>
  );
}