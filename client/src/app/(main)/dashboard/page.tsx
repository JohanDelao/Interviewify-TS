"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { LoadingOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { User } from '../../interfaces';
import ScheduleInterview from '../components/scheduleInterview';

const Dashboard = () => {
    const [user, setUser] = useState<User | null>(null);
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
              setUser(res.data.user)
            } else {
                // TO DO: error handling for user
                router.push('/')
            }
          } catch (error) {
            console.log(error);
          }
        };
        setIsLoading(true);
        getUser().then(() => setTimeout(() => {setIsLoading(false)}, 500));
      }, []);

    if(isLoading === true && user === null){
        return (
            <div className='w-full h-full flex items-center justify-center'>
                <LoadingOutlined className='text-lg text-secondary' />
            </div>
        )
    }

    return (
        <div className='w-full h-full p-4 flex flex-col gap-6'>
            <div className='flex flex-col gap-1'>
                <p className='text-2xl font-urbanist font-bold text-accent'>Hello, {user?.username} 👋</p>
                <p className='text-base font-redHatText font-medium text-accent/60'>Keep pushing forward! Every practice session brings you one step closer to acing your next interview.</p>
            </div>
            <ScheduleInterview />
        </div>
    )
}

export default Dashboard;