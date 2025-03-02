'use client'

import Image from 'next/image'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoCloseOutline } from 'react-icons/io5'
import { useRouter } from 'next/navigation'
import IconButton from './IconButton'
export default function Logo({isInDrawer = false, onClickClose = () => {}}: {isInDrawer?: boolean, onClickClose?: () => void}) {
    const router = useRouter()

    const onClickLogo = () => {
        router.push("/")
    }     
    
    const onClickMenu = () => {
        console.log("menu")
    }

  return (
    <section className='flex flex-row items-center gap-3'>
      {isInDrawer ? (
        <IconButton icon={<IoCloseOutline size={30} />} onClickIcon={onClickClose} />
      ) : (
        <IconButton icon={<RxHamburgerMenu size={24} />} onClickIcon={onClickMenu} />
      )}
    <div className='cursor-pointer' onClick={onClickLogo}>
        <Image src={"/main-logo.svg"} alt="logo" width={100} height={30} />
    </div>
    </section>
  )
}
