import React from 'react'
import Link from "next/link";
import Image from "next/image";


const UsercardInfo = ({userId}:{userId:string}) => {
    return (
        <div className={'p-4 flex bg-white flex-col shadow-md rounded-lg relative gap-4 justify-between text-sm'}>
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Media</span>
                <Link href="/" className="text-blue-500 text-xs">
                    See all
                </Link>
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col gap-4 text-gray-500">
                <div className="flex items-center gap-2">
                    <span className="text-xl text-black">Name </span>
                    <span className="text-sm">SurName</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
                <div className="flex items-center gap-2">
                    <Image src="/map.png" alt="" width={16} height={16}/>
                    <span>Living in <b>city</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/school.png" alt="" width={16} height={16}/>
                    <span>Went to <b>School</b></span>
                </div>
                <div className="flex items-center gap-2">
                    <Image src="/work.png" alt="" width={16} height={16}/>
                    <span>Works at <b>work</b></span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex gap-1 items-center">
                        <Image src="/link.png" alt="" width={16} height={16}/>
                        <Link href='/' className="text-blue-500 font-medium">
                            website
                        </Link>
                    </div>
                    <div className="flex gap-1 items-center">
                        <Image src="/date.png" alt="" width={16} height={16}/>
                        <span>Joined </span>
                    </div>
                </div>
                {/*<UserInfoCardInteraction*/}
                {/*    userId={user.id}*/}
                {/*    isUserBlocked={isUserBlocked}*/}
                {/*    isFollowing={isFollowing}*/}
                {/*    isFollowingSent={isFollowingSent}*/}
                {/*/>*/}
            </div>
            <button className={'w-full p-2 bg-blue-500 text-white rounded-xl'}>Follow</button>
            <span className={'w-full flex justify-end text-sm cursor-pointer text-red-500 capitalize '}>block user</span>
        </div>
)
}
export default UsercardInfo
