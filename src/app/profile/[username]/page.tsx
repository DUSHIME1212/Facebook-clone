import React from 'react'
import Leftmenu from "@/app/components/Leftmenu";
import Userstories from "@/app/components/Stories";
import Addpost from "@/app/components/Addpost";
import Feed from "@/app/components/Feed";
import Rightmenu from "@/app/components/Rightmenu";
import Image from "next/image";

const Page = () => {
    return (
        <div className='flex gap-6 pt-8'>
            <div className={'hidden xl:block w-[20%]'}>
                <Leftmenu/>
            </div>
            <div className={'w-full lg:w-[70%] xl:w-[50%] '}>
                <div className={'flex flex-col gap-6'}>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-full h-64 relative">
                                <Image
                                    src="https://i.pinimg.com/564x/25/82/d1/2582d13c85b5ea2638456d85e47c1be8.jpg"
                                    alt=""
                                    fill
                                    className="rounded-md object-cover"
                                />
                                <Image
                                    src="https://i.pinimg.com/564x/25/82/d1/2582d13c85b5ea2638456d85e47c1be8.jpg"
                                    alt=""
                                    width={128}
                                    height={128}
                                    className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
                                />
                            </div>
                            <h1 className="mt-20 mb-4 text-2xl font-medium">
                                username
                            </h1>
                            <div className="flex items-center justify-center gap-12 mb-4">
                                <div className="flex flex-col items-center">
                                    <span className="font-medium">36</span>
                                    <span className="text-sm">Posts</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="font-medium">5000</span>
                                    <span className="text-sm">Followers</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="font-medium">123</span>
                                    <span className="text-sm">Following</span>
                                </div>
                            </div>
                        </div>
                    <Feed/>
                </div>
            </div>
            <div className={'hidden lg:block w-[30%]'}>
                <Rightmenu/>
            </div>
        </div>
    )
}
export default Page
