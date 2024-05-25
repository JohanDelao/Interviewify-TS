"use client"
import React, { useEffect } from 'react';
import { useInterviewContext } from "@/app/contexts/interview-context";
import { useRouter } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { interview } = useInterviewContext();
  const router = useRouter();
  
  useEffect(() => {
    if (!interview) {
      router.push('/dashboard');
    }
  }, [interview, router]);

  return (
    <div className='w-full h-full'>
        {children}
    </div>
  );
}