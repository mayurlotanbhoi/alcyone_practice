import React, { ChangeEvent, useState } from "react"
import OTPCompo from "./OTPCompo"

const Auth: React.FC = () => {
    const [phone, setphone] = useState<string | null>()
    const [isPhoneOk, setPhoneOk] = useState(false)
    const onChanePhone = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("event", e.target.value)
        setphone(e.target.value)
    }
    const sendOTPOnPhone = () => {
        setPhoneOk(true)
    }


    return <>
        {!isPhoneOk ? <div>
            <input type="number" onChange={onChanePhone} />
            <button className=" text-primary" onClick={sendOTPOnPhone} >Submit</button>
        </div> : <div><OTPCompo /></div>}
    </>
}
export default Auth;