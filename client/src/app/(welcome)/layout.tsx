'use client';
import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingOutlined } from "@ant-design/icons"

export default function Layout({ children }: React.PropsWithChildren<{}>) {
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
          router.push('/dashboard');
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getUser();
  }, []);

  if(isLoading){
    return <div className='w-full h-screen flex justify-center items-center'><LoadingOutlined className='text-xl text-blue-300' /></div>
  }

  return (
        <div className={"flex flex-col"}>
            {children}
        </div>
    );
}
