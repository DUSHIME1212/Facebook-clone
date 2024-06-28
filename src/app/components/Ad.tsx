import React from 'react'
import Image from "next/image";
import Link from "next/link";

function Ad({size}:{size:'md'|'lg'|'xl'}) {
    const user = 'https://i.pinimg.com/564x/b4/1b/ed/b41bed3553791d2bf617999e53df5ae0.jpg'
    return (
        <div className={'p-4 flex bg-white flex-col shadow-md rounded-lg relative gap-4 justify-between text-sm'}>
            {/*top*/}
            <div className={'flex relative items-center justify-between text-gray-500 font-medium'}>
                <span>Sponsered ads</span>
                <Image src={'/more.png'} alt={''} width={16} height={16}/>
            </div>
            {/*bootm*/}
            <div className={`flex flex-col mt-4 ${size === "md" ? 'gap-4' : 'gap-8'}`}>
                <div className={`relative w-full ${size === 'md' ? 'h-24' : size === 'xl' ? 'h-36' : 'h-48'}`}>
                    <Image src={user} className={'rounded-lg size-full object-cover'} alt={''} width={16} height={16}/>

                </div>
            </div>
            <div className={'flex items-center relative gap-4'}>
                <Image src={user} className={'rounded-lg size-10 object-cover'} alt={''} width={16} height={16}/>
                <div className={'flex flex-col'}>
                    <span>Bigchef laounge</span>
                </div>
            </div>
            <span className={`${size ==='md'?'text-xs':'text-sm'}`}>Cryptonet Technologies Private Limited is interested in your profile. Accept invite to get shortlisted for this opportunity</span>
            <Link href={''} className={`w-full p-2 grid place-items-center rounded-xl ${size ==='md'?'text-xs':'text-sm'} bg-stone-200`}>Learn more</Link>

        </div>
    )
}

export default Ad
