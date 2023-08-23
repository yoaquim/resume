import React, { useContext } from 'react'
import ThemeContext, { Theme } from '../context'
// @ts-ignore
import pdf from '../docs/yoaquim-cintron.pdf'

export default function PrintBanner() {
    const Theme: Theme = useContext(ThemeContext)
    return (
        <a href={pdf} target="_blank" rel="noreferrer" className={`cursor-pointer py-1 w-screen fixed bottom-0 bg-gradient-to-r ${Theme.gradient} text-white text-center uppercase font-bold`}>
            DOWNLOAD PRINT RESUME
        </a>
    )
}