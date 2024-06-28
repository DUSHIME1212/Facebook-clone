import React from 'react'
import Link from "next/link";
import Image from "next/image";

const UserCardmedia = ({userId}:{userId:string}) => {
    const imageArray = [
        "https://i.pinimg.com/564x/25/82/d1/2582d13c85b5ea2638456d85e47c1be8.jpg",
        "https://i.pinimg.com/564x/25/82/d1/2582d13c85b5ea2638456d85e47c1be8.jpg",
        "https://i.pinimg.com/564x/25/82/d1/2582d13c85b5ea2638456d85e47c1be8.jpg",
        "https://i.pinimg.com/564x/25/82/d1/2582d13c85b5ea2638456d85e47c1be8.jpg",
        "https://i.pinimg.com/564x/25/82/d1/2582d13c85b5ea2638456d85e47c1be8.jpg",
        "https://i.pinimg.com/564x/25/82/d1/2582d13c85b5ea2638456d85e47c1be8.jpg",
        "https://i.pinimg.com/564x/25/82/d1/2582d13c85b5ea2638456d85e47c1be8.jpg",
        "https://i.pinimg.com/564x/25/82/d1/2582d13c85b5ea2638456d85e47c1be8.jpg"
    ];

    return (
        <div className={'p-4 flex bg-white flex-col shadow-md rounded-lg relative gap-4 justify-between text-sm'}>
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Information</span>
                <Link href="/" className="text-blue-500 text-xs">
                    See all
                </Link>
            </div>
            {/* BOTTOM */}
            <div className="flex gap-4 justify-between flex-wrap">
                {imageArray.map((item,i)=> (
                    <div className="relative w-1/5 h-24" key={i}>
                        <Image
                            src={item}
                            alt=""
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default UserCardmedia
