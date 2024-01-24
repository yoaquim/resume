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
            <div className="mt-10 lg:mt-0 flex flex-col lg:flex-row pt-4 font-rubik text-stone space-y-4 lg:space-x-10 lg:space-y-0 font-normal">
                <div className="flex items-center space-x-1">
                    <PhoneIcon className="w-4 h-4 text-light-stone"/>
                    <a href="tel:+13475108940">347-510-8940</a>
                </div>
                <div className="flex items-center space-x-1">
                    <AtSymbolIcon className="w-6 h-6 text-light-stone"/>
                    <a href="mailto:yoaquim@outlook.com">yoaquim@outlook.com</a>
                </div>
                <div className="flex items-center space-x-1.5">
                    <img src={gh} className="w-6 h-6" alt="github_logo"/>
                    <a href="https://github.com/yoaquim" target="_blank" rel="noreferrer">github.com/yoaquim</a>
                </div>
            </div>
        </>
    )
}