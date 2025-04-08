import React, { ChangeEvent, useRef, useState } from 'react'

export default function OTPCompo() {
    const [otp, setOtp] = useState(new Array(4).fill(""))
    const inputRef = useRef<Array<HTMLInputElement>>([])

    const handelChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;

        if (!/^[0-9]?$/.test(value)) return

        const newOtp = [...otp]
        newOtp[index] = value;
        setOtp(newOtp)

        if (index < 3 && value) {
            inputRef.current[index + 1]?.focus()
        }

    }

    const handelKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (index > 0 && e.key === 'Backspace' && inputRef.current[index - 1] && !otp[index]) {
            inputRef.current[index - 1]?.focus()
        }

    }
    return (
        <div className=' btn'>
            <div>
                {otp.map((digit, index) => (
                    <input
                        type='text'
                        ref={(ele) => inputRef.current[index] = ele}
                        inputMode='numeric'
                        maxLength={1}
                        value={digit}
                        onChange={ele => handelChange(ele, index)}
                        onKeyDown={ele => handelKeyDown(ele, index)}
                        className=''
                    />
                ))}

            </div>
        </div>
    )
}
