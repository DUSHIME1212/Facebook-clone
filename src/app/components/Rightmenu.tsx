import React from 'react'
import Friendrequests from "@/app/components/Friendrequests";
import Birthdays from "@/app/components/Birthdays";
import Ad from "@/app/components/Ad";
import UserCardmedia from "@/app/components/UserCardmedia";
import UsercardInfo from "@/app/components/UsercardInfo";

const Rightmenu = ({userId}:{userId?:string}) => {
    return (
        <div className={'flex flex-col justify-center gap-4'}>
            {/*<UsercardInfo userId={userId}/>*/}
            {/*<UserCardmedia userId={userId}/>*/}
            {
                userId ? (
                    <>
                        <UsercardInfo userId={userId}/>
                        <UserCardmedia userId={userId}/>
                    </>
                ):(<>
                    <Friendrequests/>
                    <Birthdays/>
                    <Ad size={"md"}/>
                </>)
            }

        </div>
    )
}
export default Rightmenu
