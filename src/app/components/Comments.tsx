import React from 'react'
import Image from "next/image";

const Comments = () => {
    const user = 'https://i.pinimg.com/564x/00/a2/64/00a2641e55f8c68ee0d1eed61aa7000a.jpg'
    return (
        <div>
            {/*write*/}
            <div className={'flex gap-4 items-center'}>
                <Image src={user} alt={''} className={'size-8 object-cover rounded-full overflow-clip'} width={16} height={16}/>
                <input type="text" placeholder='write a comment...' className={'p-2 flex-1 bg-slate-100 z-30 outline-none rounded-xl w-full'} />
                <Image src={'/emoji.png'} alt={''} className={'size-4 cursor-pointer object-cover rounded-full overflow-clip'} width={16} height={16}/>
            </div>
            {/*comments*/}
            <div>
                {/*COMMENT*/}
                <div className={'relative flex mt-4 gap-2 items-start'}>
                    {/*AVATAR*/}
                    <div className={'flex w-20 items-center p-2 relative gap-4'}>
                        <Image src={user} alt={''} className={'size-8 flex-1 object-cover rounded-full overflow-clip'} width={16} height={16}/>
                    </div>
                    {/*DESC*/}
                    <div className={'flex flex-col items-start p-2 gap-2'}>
                        <span className={'font-medium text-sm'}>Jude bellingham</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        </p>
                        <div className={'flex items-center gap-2 bg-state-100 rounded-xl justify-between text-sm'}>
                            <div className={'flex items-center p-2 gap-2 bg-slate-100 rounded-xl'}>
                                <Image src={'/like.png'} alt={''} className={'size-4 cursor-pointer object-cover overflow-clip'} width={20} height={20}/>
                                <span className={'text-gray-500'}>|</span>
                                <span>300 likes</span>
                            </div>
                            <div>
                                Reply
                            </div>
                        </div>
                    </div>
                    {/*Icon*/}
                    <Image src={'/more.png'} alt={''} width={16} height={16} className={'flex cursor-pointer size-4 gap-4'}/>
                </div>
            </div>
        </div>
    )
}
export default Comments
