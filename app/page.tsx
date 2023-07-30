"use client";


import Header from '@/common/Header/Header'
import Sidebar from '@/common/Sidebar/Sidebar'
import Hero from '@/components/Hero/Hero'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [isMainDrawerOpen, setIsMainDrawerOpen] = useState(false);

  return (
    <section className='h-[100rem] '>
      <Header setIsMainDrawerOpen={setIsMainDrawerOpen} isMainDrawerOpen={isMainDrawerOpen} />
      <Sidebar setIsMainDrawerOpen={setIsMainDrawerOpen} isMainDrawerOpen={isMainDrawerOpen} />
      <Hero />
    </section>
  )
}
