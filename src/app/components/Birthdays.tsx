import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Birthdays = () => {
    const user = 'https://i.pinimg.com/564x/00/a2/64/00a2641e55f8c68ee0d1eed61aa7000a.jpg'
    return (
        <div className={'p-4 flex bg-white flex-col shadow-md rounded-lg relative gap-4 justify-between text-sm'}>
            {/*TOP*/}
            <div className={'flex justify-between items-center font-medium'}>
                <span className={'text-gray-500 select-none cursor-none'}>Birthdays</span>
            </div>

            {/*TOP*/}
            <div className={'flex flex-row w-full gap-3 items-center justify-between'}>
                <div className={'flex gap-2 items-center'}>
                    <Image src={user} alt={''} className={'size-10 rounded-full object-cover'} width={14} height={14}/>
                    <span>Don moen</span>
                </div>
                <div className={'flex justify-end gap-2'}>
                    <button className={'p-2 bg-blue-500 text-white text-xs rounded-xl'} >Celebrate</button>
                </div>
            </div>
            {/*upcomming events*/}
            <div className={'p-4 bg-blue-100 relative rounded-xl flex items-center gap-4'}>
                <Image src={'/gift.png'} alt={''} className={'size-10 object-contain'} width={14} height={14}/>
                <Link className={'flex text-xs flex-col gap-1'} href={'/'}>
                    <span>Up coming Birthdays</span>
                    <span className={'text-gray-500'}>See all other upcoming birthday</span>
                </Link>

            </div>
        </div>
    )
}
export default Birthdays
