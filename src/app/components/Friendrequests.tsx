import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Friendrequests = () => {
    const user = 'https://i.pinimg.com/564x/00/a2/64/00a2641e55f8c68ee0d1eed61aa7000a.jpg'
    return (
        <div className={'p-4 flex bg-white flex-col shadow-md rounded-lg relative gap-4 justify-between text-sm'}>
            {/*TOP*/}
            <div className={'flex justify-between items-center font-medium'}>
                <span className={'text-gray-500 select-none cursor-none'}>Friendrequests</span>
                <Link href={''} className={'text-blue-500'}>See all</Link>
            </div>

            {/*TOP*/}
            <div className={'flex flex-row w-full gap-3 items-center justify-between'}>
                <div className={'flex gap-2 items-center'}>
                    <Image src={user} alt={''} className={'size-10 rounded-full object-cover'} width={14} height={14}/>
                    <span>Don moen</span>
                </div>
                <div className={'flex justify-end gap-2'}>
                    <Image src={'/accept.png'} alt={''} className={'size-4 cursor-pointer rounded-full object-cover'} width={14} height={14}/>
                    <Image src={'/reject.png'} alt={''} className={'size-4 cursor-pointer rounded-full object-cover'} width={14} height={14}/>

                </div>
            </div>
            <div className={'flex flex-row w-full gap-3 items-center justify-between'}>
                <div className={'flex gap-2 items-center'}>
                    <Image src={user} alt={''} className={'size-10 rounded-full object-cover'} width={14} height={14}/>
                    <span>Don moen</span>
                </div>
                <div className={'flex justify-end gap-2'}>
                    <Image src={'/accept.png'} alt={''} className={'size-4 cursor-pointer rounded-full object-cover'} width={14} height={14}/>
                    <Image src={'/reject.png'} alt={''} className={'size-4 cursor-pointer rounded-full object-cover'} width={14} height={14}/>

                </div>
            </div>
            <div className={'flex flex-row w-full gap-3 items-center justify-between'}>
                <div className={'flex gap-2 items-center'}>
                    <Image src={user} alt={''} className={'size-10 rounded-full object-cover'} width={14} height={14}/>
                    <span>Don moen</span>
                </div>
                <div className={'flex justify-end gap-2'}>
                    <Image src={'/accept.png'} alt={''} className={'size-4 cursor-pointer rounded-full object-cover'} width={14} height={14}/>
                    <Image src={'/reject.png'} alt={''} className={'size-4 cursor-pointer rounded-full object-cover'} width={14} height={14}/>

                </div>
            </div>

        </div>
    )
}
export default Friendrequests
