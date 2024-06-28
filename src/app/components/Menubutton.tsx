'use client'
import React from 'react'
import Link from "next/link";

const Menubutton = () => {
    const [isopen, setOpen] = React.useState(false);
    const link = [
        {title:'Home',path:'/'},
        {title:'Friends',path:'/'},
        {title:'Groups',path:'/'},
        {title:'Stories',path:'/'},
        {title:'Login',path:'/'},
    ]
    return (

        <div>
            <div onClick={() => {
                setOpen((prev) => !prev)
            }} className={'flex flex-col md:hidden cursor-pointer justify-between size-[22px]'}>
                <div className={`w-6 h-1 rounded-full duration-700 origin-left ${isopen?'rotate-45':''} bg-blue-500`}></div>
                <div className={`w-6 h-1 rounded-full duration-700 origin-left ${isopen ? 'opacity-0' : 'opacity-100'} bg-blue-500\`} bg-blue-500`}></div>
                <div className={`w-6 h-1 rounded-full duration-700 origin-left ${isopen?'-rotate-45':''} bg-blue-500`}></div>
            </div>
            {isopen &&
            <div className={'fixed z-[100] top-16 bg-opacity-20 backdrop-blur-md h-screen w-screen bg-gray-50 left-1/2 -translate-x-1/2 flex justify-center text-2xl gap-4 flex-col items-center'}>
                {link.map((item, index) => (
                    <Link key={index} href={item.path}>{item.title}</Link>
                ))}
            </div>}
        </div>
    )
}
export default Menubutton
