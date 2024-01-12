import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/solid'
import gh from '../assets/gh.svg'
import React from 'react'

export default function Header() {
    return (
        <>
            <div className="font-rubik font-bold text-5xl text-stone">
                YOAQUIM CINTRON
            </div>
            <div className="pt-2 font-inter text-light-green text-2xl">
                Engineering Leader, Software Engineer
            </div>
            <div className="flex pt-4 font-rubik text-stone space-x-10 font-normal">
                <div className="flex items-center space-x-1">
                    <PhoneIcon className="w-4 h-4 text-light-stone"/>
                    <div>347-510-8940</div>
                </div>
                <div className="flex items-center space-x-1">
                    <AtSymbolIcon className="w-6 h-6 text-light-stone"/>
                    <div>yoaquim@outlook.com</div>
                </div>
                <div className="flex items-center space-x-1.5">
                    <img src={gh} className="w-6 h-6" alt="github_logo"/>
                    <div>github.com/yoaquim</div>
                </div>
            </div>
        </>
    )
}