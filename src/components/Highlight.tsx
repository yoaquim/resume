import React from 'react'
import bulletPoint from '../assets/icon-circle-small-o.svg'

export default function Highlight({text, withMargin = true}: { text: string, withMargin?: boolean }) {
    const style = {height: '9px', width: '9px'}
    return (
        <div className={`flex flex-row items-center ${withMargin ? 'mt-5' : ''} justify-items-center`}>
            <img src={bulletPoint} alt="" style={style}/>
            <p className="ml-3">{text}</p>
        </div>
    )
}
